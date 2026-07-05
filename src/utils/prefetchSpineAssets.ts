import type { PortfolioItem } from "../data/portfolioItems.generated";

const prefetchedAssets = new Set<string>();

function prefetchAsset(path: string | null) {
  if (!path || prefetchedAssets.has(path)) return;

  prefetchedAssets.add(path);
  void fetch(path, {
    cache: "force-cache",
    credentials: "same-origin",
  }).catch(() => {
    prefetchedAssets.delete(path);
  });
}

export function prefetchSpineAssets(item: PortfolioItem | null) {
  if (!item) return;

  prefetchAsset(item.spine.json);
  prefetchAsset(item.spine.atlas);
  item.spine.textures.forEach(prefetchAsset);
}
