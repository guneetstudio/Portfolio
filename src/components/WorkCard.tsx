import { useState } from "react";
import type { PortfolioItem } from "../data/portfolioItems.generated";

type WorkCardProps = {
  isActive: boolean;
  item: PortfolioItem;
  onPrefetch: (item: PortfolioItem) => void;
  onSelect: (item: PortfolioItem) => void;
};

export function WorkCard({ isActive, item, onPrefetch, onSelect }: WorkCardProps) {
  const [thumbnailFailed, setThumbnailFailed] = useState(false);
  const showThumbnail = item.thumbnail && !thumbnailFailed;
  const handlePrefetch = () => onPrefetch(item);

  return (
    <button
      aria-label={`Reveal motion preview for ${item.title}`}
      aria-pressed={isActive}
      className="work-card-button"
      onFocus={handlePrefetch}
      onClick={() => onSelect(item)}
      onPointerDown={handlePrefetch}
      onPointerEnter={handlePrefetch}
      onTouchStart={handlePrefetch}
      type="button"
    >
      <span className="work-thumb" aria-hidden="true">
        {showThumbnail ? (
          <img
            alt=""
            className="work-thumb-image"
            loading="lazy"
            onError={() => setThumbnailFailed(true)}
            src={item.thumbnail ?? undefined}
          />
        ) : (
          <span className="work-thumb-placeholder">
            <span>{item.title.slice(0, 1)}</span>
          </span>
        )}
        <span className="work-play-indicator" />
      </span>
      <span className="work-card-copy">
        <span className="work-card-title">{item.title}</span>
      </span>
    </button>
  );
}
