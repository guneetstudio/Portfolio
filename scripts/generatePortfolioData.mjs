import { copyFile, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const sourceRoot = "/Users/guneet/SpinePortfolioExports";
const projectRoot = process.cwd();
const publicAssetsRoot = path.join(projectRoot, "public", "spine-assets");
const outputFile = path.join(projectRoot, "src", "data", "portfolioItems.generated.ts");
const assetExtensions = new Set([".json", ".atlas", ".png", ".webp"]);
const thumbnailPriority = [
  "thumbnail.webp",
  "thumbnail.png",
  "cover.webp",
  "cover.png",
  "preview.webp",
  "preview.png",
];

const categoryByFolder = new Map([
  ["Dog", "Character Animation"],
  ["Dolphin", "Character Animation"],
  ["Dragon", "Character Animation"],
  ["Hamster", "Character Animation"],
  ["Hedgehog", "Character Animation"],
  ["LadyWaitress", "Character Animation"],
  ["DiamondScatter", "Symbol Animation"],
  ["RedScatter", "Symbol Animation"],
  ["ScatterChef", "Symbol Animation"],
  ["DolphinTransition", "Transition Animation"],
  ["Bag", "Feature Asset / Prop"],
  ["Envelope", "Feature Asset / Prop"],
  ["Lamp", "Feature Asset / Prop"],
  ["Butterfly", "VFX / Character Motion"],
]);

function sortByName(a, b) {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
}

function toTitle(folderName) {
  return folderName
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function toId(folderName) {
  return folderName
    .trim()
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

function assetPath(folderName, fileName) {
  return `/spine-assets/${encodeURIComponent(folderName)}/${encodeURIComponent(fileName)}`;
}

function findThumbnail(files) {
  const byLowerName = new Map(files.map((fileName) => [fileName.toLowerCase(), fileName]));
  for (const thumbnailName of thumbnailPriority) {
    const match = byLowerName.get(thumbnailName);
    if (match) return match;
  }

  return null;
}

function guessCategory(folderName, animations) {
  if (categoryByFolder.has(folderName)) {
    return categoryByFolder.get(folderName);
  }

  const haystack = `${folderName} ${animations.join(" ")}`.toLowerCase();
  if (haystack.includes("transition")) return "Transition Animation";
  if (haystack.includes("scatter") || haystack.includes("symbol")) return "Symbol Animation";
  if (haystack.includes("wild") || haystack.includes("hunter") || haystack.includes("santa") || haystack.includes("snowman") || haystack.includes("owl")) {
    return "Character Animation";
  }
  if (haystack.includes("burst") || haystack.includes("multiplier")) return "VFX / Feature Animation";
  if (haystack.includes("slot") || haystack.includes("wheel") || haystack.includes("royal") || haystack.includes("chocolate") || haystack.includes("lollipop")) {
    return "Feature Asset / Prop";
  }

  return "Spine Animation";
}

function descriptionFor(folderName, category) {
  const title = toTitle(folderName);

  if (folderName === "Dog") {
    return "Character animation with readable Spine motion and casino-game timing.";
  }
  if (folderName === "Dolphin") {
    return "Smooth character motion focused on playful timing and clean Spine playback.";
  }
  if (folderName === "DiamondScatter") {
    return "Scatter symbol animation built for strong visual readability and slot-game impact.";
  }
  if (folderName === "Bag") {
    return "Feature prop animation with crisp timing and polished game-ready presentation.";
  }

  switch (category) {
    case "Character Animation":
      return `${title} character animation with clean Spine timing and game-ready motion.`;
    case "Symbol Animation":
      return `${title} symbol animation focused on slot-game readability and impact.`;
    case "Transition Animation":
      return `${title} transition animation with crisp timing and polished motion.`;
    case "Feature Asset / Prop":
      return `${title} feature asset animation with clean timing and presentation.`;
    case "VFX / Character Motion":
      return `${title} motion with light VFX energy and clean Spine playback.`;
    case "VFX / Feature Animation":
      return `${title} feature animation with punchy VFX timing and game-ready impact.`;
    default:
      return `${title} Spine animation prepared for game-ready portfolio presentation.`;
  }
}

function tagsFor(category) {
  switch (category) {
    case "Character Animation":
      return ["Spine 2D", "Character", "Game Ready"];
    case "Symbol Animation":
      return ["Spine 2D", "Symbol", "Game Ready"];
    case "Transition Animation":
      return ["Spine 2D", "Transition", "VFX", "Game Ready"];
    case "Feature Asset / Prop":
      return ["Spine 2D", "Feature Asset", "Game Ready"];
    case "VFX / Character Motion":
      return ["Spine 2D", "Character", "VFX", "Game Ready"];
    case "VFX / Feature Animation":
      return ["Spine 2D", "Feature Asset", "VFX", "Game Ready"];
    default:
      return ["Spine 2D", "Game Ready"];
  }
}

async function readAnimations(jsonPath) {
  try {
    const raw = await readFile(jsonPath, "utf8");
    const parsed = JSON.parse(raw);
    if (parsed.animations && typeof parsed.animations === "object" && !Array.isArray(parsed.animations)) {
      return Object.keys(parsed.animations).sort(sortByName);
    }
  } catch (error) {
    return { error: error instanceof Error ? error.message : String(error) };
  }

  return [];
}

function formatTs(items) {
  const header = `export type PortfolioItem = {
  id: string;
  title: string;
  sourceFolderName: string;
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

async function main() {
  const warnings = [];
  const sourceEntries = await readdir(sourceRoot, { withFileTypes: true });
  const folders = sourceEntries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort(sortByName);

  await mkdir(publicAssetsRoot, { recursive: true });

  const items = [];
  const summary = {
    foldersDetected: folders.length,
    itemsGenerated: 0,
    foldersWithJson: [],
    foldersWithAtlas: [],
    foldersWithPng: [],
    foldersWithWebp: [],
    foldersWithThumbnail: [],
    foldersWithAnimations: [],
  };

  for (const folderName of folders) {
    const folderPath = path.join(sourceRoot, folderName);
    const targetFolder = path.join(publicAssetsRoot, folderName);
    const entries = await readdir(folderPath, { withFileTypes: true });
    const files = entries
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .filter((fileName) => assetExtensions.has(path.extname(fileName).toLowerCase()))
      .sort(sortByName);

    await mkdir(targetFolder, { recursive: true });

    for (const fileName of files) {
      await copyFile(path.join(folderPath, fileName), path.join(targetFolder, fileName));
    }

    const jsonFiles = files.filter((fileName) => path.extname(fileName).toLowerCase() === ".json");
    const atlasFiles = files.filter((fileName) => path.extname(fileName).toLowerCase() === ".atlas");
    const pngFiles = files.filter((fileName) => path.extname(fileName).toLowerCase() === ".png");
    const webpFiles = files.filter((fileName) => path.extname(fileName).toLowerCase() === ".webp");
    const thumbnailFile = findThumbnail(files);
    const textureFiles = [...pngFiles, ...webpFiles]
      .filter((fileName) => fileName !== thumbnailFile)
      .sort(sortByName);

    const jsonFile = jsonFiles[0] ?? null;
    const atlasFile = atlasFiles[0] ?? null;
    let animations = [];

    if (jsonFile) {
      const animationResult = await readAnimations(path.join(folderPath, jsonFile));
      if (Array.isArray(animationResult)) {
        animations = animationResult;
      } else {
        warnings.push(`${folderName}: could not read animations from ${jsonFile}: ${animationResult.error}`);
      }
    }

    if (!jsonFile) warnings.push(`${folderName}: missing Spine JSON file`);
    if (!atlasFile) warnings.push(`${folderName}: missing atlas file`);
    if (textureFiles.length === 0) warnings.push(`${folderName}: missing PNG/WebP texture files`);

    if (jsonFile) summary.foldersWithJson.push(folderName);
    if (atlasFile) summary.foldersWithAtlas.push(folderName);
    if (pngFiles.length > 0) summary.foldersWithPng.push(folderName);
    if (webpFiles.length > 0) summary.foldersWithWebp.push(folderName);
    if (thumbnailFile) summary.foldersWithThumbnail.push(folderName);
    if (animations.length > 0) summary.foldersWithAnimations.push(folderName);

    const category = guessCategory(folderName, animations);

    items.push({
      id: toId(folderName),
      title: toTitle(folderName),
      sourceFolderName: folderName,
      category,
      description: descriptionFor(folderName, category),
      tags: tagsFor(category),
      spine: {
        json: jsonFile ? assetPath(folderName, jsonFile) : null,
        atlas: atlasFile ? assetPath(folderName, atlasFile) : null,
        textures: textureFiles.map((fileName) => assetPath(folderName, fileName)),
      },
      thumbnail: thumbnailFile ? assetPath(folderName, thumbnailFile) : null,
      animations,
    });
  }

  summary.itemsGenerated = items.length;

  await writeFile(outputFile, formatTs(items), "utf8");

  for (const warning of warnings) {
    console.warn(`Warning: ${warning}`);
  }

  console.log(JSON.stringify({ ...summary, warnings }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
