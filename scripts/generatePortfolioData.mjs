import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const publicAssetsRoot = path.join(projectRoot, "public", "spine-assets");
const outputFile = path.join(projectRoot, "src", "data", "portfolioItems.generated.ts");
const assetExtensions = new Set([".json", ".atlas", ".png", ".webp"]);
const folderDefinitions = [
  { label: "Symbols", folder: "Symbols" },
  { label: "Background", folder: "Background" },
  { label: "Transitions", folder: "Transition" },
  { label: "Popups", folder: "Popups" },
  { label: "Anticipation", folder: "Anticipation" },
  { label: "UI Buttons", folder: "UI Buttons" },
];
const thumbnailPriority = [
  "thumbnail.webp",
  "thumbnail.png",
  "cover.webp",
  "cover.png",
  "preview.webp",
  "preview.png",
];

function sortByName(a, b) {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
}

function toTitle(value) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

function toId(value) {
  return value
    .trim()
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

function assetPath(...segments) {
  return `/spine-assets/${segments.map((segment) => encodeURIComponent(segment)).join("/")}`;
}

function findThumbnail(files) {
  const byLowerName = new Map(files.map((fileName) => [fileName.toLowerCase(), fileName]));
  for (const thumbnailName of thumbnailPriority) {
    const match = byLowerName.get(thumbnailName);
    if (match) return match;
  }

  return null;
}

function parseAtlasPages(atlasText) {
  const lines = atlasText.split(/\r?\n/);
  const pages = [];

  lines.forEach((line, index) => {
    const current = line.trim();
    const next = lines[index + 1]?.trim() ?? "";

    if (current && !current.includes(":") && next.startsWith("size:")) {
      pages.push(current);
    }
  });

  return pages;
}

async function readAnimations(jsonPath) {
  try {
    const parsed = JSON.parse(await readFile(jsonPath, "utf8"));
    if (parsed.animations && typeof parsed.animations === "object" && !Array.isArray(parsed.animations)) {
      return Object.keys(parsed.animations).sort(sortByName);
    }
  } catch (error) {
    return { error: error instanceof Error ? error.message : String(error) };
  }

  return [];
}

async function readAssetFiles(folderPath) {
  const entries = await readdir(folderPath, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((fileName) => assetExtensions.has(path.extname(fileName).toLowerCase()))
    .sort(sortByName);
}

function categoryFor(displayFolder) {
  switch (displayFolder) {
    case "Symbols":
      return "Symbol Animation";
    case "Popups":
      return "Popup Animation";
    case "Anticipation":
      return "Anticipation Animation";
    case "Transition":
      return "Transition Animation";
    case "Background":
      return "Background Animation";
    case "UI Buttons":
      return "UI Animation";
    default:
      return "Spine Animation";
  }
}

function tagsFor(displayFolder) {
  return ["Spine 2D", displayFolder, "Game Ready"];
}

function formatTs(items) {
  const header = `export const portfolioDisplayFolders = ${JSON.stringify(folderDefinitions)} as const;

export type DisplayFolder = (typeof portfolioDisplayFolders)[number]["folder"];

export type PortfolioItem = {
  id: string;
  title: string;
  sourceFolderName: string;
  displayFolder: DisplayFolder;
  category: string;
  description: string;
  tags: string[];
  spine: {
    json: string | null;
    atlas: string | null;
    textures: string[];
  };
  thumbnail: string | null;
  animations: string[];
};

`;

  return `${header}export const portfolioItems: PortfolioItem[] = ${JSON.stringify(items, null, 2)};\n`;
}

async function createItemsFromFolder({
  displayFolder,
  itemFolderName,
  folderPath,
  urlSegments,
  bundleStem = null,
  warnings,
}) {
  const files = await readAssetFiles(folderPath);
  const thumbnailFile = findThumbnail(files);
  const atlasesByStem = new Map(
    files
      .filter((fileName) => path.extname(fileName).toLowerCase() === ".atlas")
      .map((fileName) => [path.parse(fileName).name.toLowerCase(), fileName]),
  );
  const jsonFiles = files.filter(
    (fileName) =>
      path.extname(fileName).toLowerCase() === ".json" &&
      (!bundleStem || path.parse(fileName).name.toLowerCase() === bundleStem.toLowerCase()),
  );
  const completeBundles = jsonFiles
    .map((jsonFile) => ({
      jsonFile,
      stem: path.parse(jsonFile).name,
      atlasFile: atlasesByStem.get(path.parse(jsonFile).name.toLowerCase()) ?? null,
    }))
    .filter((bundle) => {
      if (bundle.atlasFile) return true;
      warnings.push(
        `${[displayFolder, ...urlSegments, bundle.jsonFile].join("/")}: missing matching atlas file`,
      );
      return false;
    })
    .sort((a, b) => sortByName(a.stem, b.stem));

  const multipleBundles = completeBundles.length > 1;
  const filesByLowerName = new Map(files.map((fileName) => [fileName.toLowerCase(), fileName]));
  const items = [];

  for (const bundle of completeBundles) {
    const atlasText = await readFile(path.join(folderPath, bundle.atlasFile), "utf8");
    const atlasPages = parseAtlasPages(atlasText);
    const textureFiles = atlasPages
      .map((pageName) => filesByLowerName.get(pageName.toLowerCase()))
      .filter(Boolean);
    const missingPages = atlasPages.filter(
      (pageName) => !filesByLowerName.has(pageName.toLowerCase()),
    );

    if (missingPages.length > 0) {
      warnings.push(
        `${[displayFolder, ...urlSegments, bundle.atlasFile].join("/")}: missing texture pages ${missingPages.join(", ")}`,
      );
    }
    if (textureFiles.length === 0) {
      warnings.push(
        `${[displayFolder, ...urlSegments, bundle.atlasFile].join("/")}: no atlas texture pages detected`,
      );
    }

    const animationResult = await readAnimations(path.join(folderPath, bundle.jsonFile));
    const animations = Array.isArray(animationResult) ? animationResult : [];
    if (!Array.isArray(animationResult)) {
      warnings.push(
        `${[displayFolder, ...urlSegments, bundle.jsonFile].join("/")}: ${animationResult.error}`,
      );
    }

    const itemTitle = multipleBundles
      ? `${toTitle(itemFolderName)} ${toTitle(bundle.stem)}`
      : toTitle(itemFolderName);
    const qualifiedName = multipleBundles
      ? `${displayFolder}-${itemFolderName}-${bundle.stem}`
      : `${displayFolder}-${itemFolderName}`;

    items.push({
      id: toId(qualifiedName),
      title: itemTitle,
      sourceFolderName: itemFolderName,
      displayFolder,
      category: categoryFor(displayFolder),
      description: `${itemTitle} Spine animation prepared for game-ready portfolio presentation.`,
      tags: tagsFor(displayFolder),
      spine: {
        json: assetPath(displayFolder, ...urlSegments, bundle.jsonFile),
        atlas: assetPath(displayFolder, ...urlSegments, bundle.atlasFile),
        textures: textureFiles.map((fileName) =>
          assetPath(displayFolder, ...urlSegments, fileName),
        ),
      },
      thumbnail: thumbnailFile
        ? assetPath(displayFolder, ...urlSegments, thumbnailFile)
        : null,
      animations,
    });
  }

  return items;
}

async function main() {
  const warnings = [];
  const items = [];
  const itemsByDisplayFolder = {};

  for (const { folder: displayFolder } of folderDefinitions) {
    const displayFolderPath = path.join(publicAssetsRoot, displayFolder);
    const entries = await readdir(displayFolderPath, { withFileTypes: true });
    const itemFolders = entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .sort(sortByName);
    const folderItems = [];

    for (const itemFolderName of itemFolders) {
      folderItems.push(
        ...(await createItemsFromFolder({
          displayFolder,
          itemFolderName,
          folderPath: path.join(displayFolderPath, itemFolderName),
          urlSegments: [itemFolderName],
          warnings,
        })),
      );
    }

    const looseFiles = await readAssetFiles(displayFolderPath);
    const looseJsonFiles = looseFiles.filter(
      (fileName) => path.extname(fileName).toLowerCase() === ".json",
    );
    for (const jsonFile of looseJsonFiles) {
      const bundleName = path.parse(jsonFile).name;
      folderItems.push(
        ...(await createItemsFromFolder({
          displayFolder,
          itemFolderName: bundleName,
          folderPath: displayFolderPath,
          urlSegments: [],
          bundleStem: bundleName,
          warnings,
        })),
      );
    }

    const uniqueFolderItems = [...new Map(folderItems.map((item) => [item.id, item])).values()];
    itemsByDisplayFolder[displayFolder] = uniqueFolderItems.length;
    items.push(...uniqueFolderItems);
  }

  const duplicateIds = items
    .map((item) => item.id)
    .filter((id, index, allIds) => allIds.indexOf(id) !== index);
  if (duplicateIds.length > 0) {
    throw new Error(`Duplicate generated portfolio IDs: ${[...new Set(duplicateIds)].join(", ")}`);
  }

  await writeFile(outputFile, formatTs(items), "utf8");

  for (const warning of warnings) {
    console.warn(`Warning: ${warning}`);
  }

  console.log(
    JSON.stringify(
      {
        folderDefinitions,
        itemsGenerated: items.length,
        itemsByDisplayFolder,
        warnings,
      },
      null,
      2,
    ),
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
