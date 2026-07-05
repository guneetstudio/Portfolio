import { Suspense, lazy, useEffect, useMemo, useRef, useState } from "react";
import { AnimationTabs } from "../components/AnimationTabs";
import { SectionHeader } from "../components/SectionHeader";
import { WorkCard } from "../components/WorkCard";
import { portfolioItems, type PortfolioItem } from "../data/portfolioItems.generated";
import { prefetchSpineAssets } from "../utils/prefetchSpineAssets";

type WorkFilter = {
  label: string;
  value: string;
};

const filters: WorkFilter[] = [
  { label: "All", value: "all" },
  { label: "Characters", value: "characters" },
  { label: "Symbols", value: "symbols" },
  { label: "Feature Assets", value: "feature-assets" },
  { label: "VFX", value: "vfx" },
  { label: "Transitions", value: "transitions" },
];

const SpinePreview = lazy(async () => {
  const module = await import("../components/SpinePreview");
  return { default: module.SpinePreview };
});

function prefetchSpinePreviewModule() {
  void import("../components/SpinePreview");
}

function SpinePreviewLoading() {
  return (
    <div className="spine-preview-shell">
      <div className="spine-preview spine-preview-loading">
        <span className="spine-preview-status">Loading motion...</span>
      </div>
    </div>
  );
}

function itemMatchesFilter(item: PortfolioItem, filter: string) {
  const category = item.category.toLowerCase();
  const tags = item.tags.map((tag) => tag.toLowerCase());

  switch (filter) {
    case "characters":
      return category.includes("character") || tags.includes("character");
    case "symbols":
      return category.includes("symbol") || tags.includes("symbol");
    case "feature-assets":
      return category.includes("feature") || tags.includes("feature asset");
    case "vfx":
      return category.includes("vfx") || tags.includes("vfx");
    case "transitions":
      return category.includes("transition") || tags.includes("transition");
    default:
      return true;
  }
}

export function SelectedWork() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);
  const [activeAnimation, setActiveAnimation] = useState<string | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const lastFocusedElementRef = useRef<HTMLElement | null>(null);

  const filteredItems = useMemo(
    () => portfolioItems.filter((item) => itemMatchesFilter(item, activeFilter)),
    [activeFilter],
  );
  const handleFilterSelect = (filter: string) => {
    setActiveFilter(filter);
  };

  const handleItemSelect = (item: PortfolioItem) => {
    lastFocusedElementRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    prefetchSpineAssets(item);
    prefetchSpinePreviewModule();
    setActiveItem(item);
    setActiveAnimation(item.animations[0] ?? null);
  };
  const handleItemPrefetch = (item: PortfolioItem) => {
    prefetchSpineAssets(item);
    prefetchSpinePreviewModule();
  };
  const navigateModalItem = (direction: -1 | 1) => {
    if (!activeItem) return;

    const currentIndex = portfolioItems.findIndex((item) => item.id === activeItem.id);
    const nextIndex =
      currentIndex === -1
        ? 0
        : (currentIndex + direction + portfolioItems.length) % portfolioItems.length;
    const nextItem = portfolioItems[nextIndex];

    setActiveItem(nextItem);
    setActiveAnimation(nextItem.animations[0] ?? null);
  };

  const closeModal = () => {
    setActiveItem(null);
    setActiveAnimation(null);
    window.requestAnimationFrame(() => {
      lastFocusedElementRef.current?.focus();
      lastFocusedElementRef.current = null;
    });
  };

  useEffect(() => {
    if (!activeItem) return;

    const currentIndex = portfolioItems.findIndex((item) => item.id === activeItem.id);
    if (currentIndex === -1) return;

    prefetchSpineAssets(portfolioItems[(currentIndex + 1) % portfolioItems.length]);
    prefetchSpineAssets(
      portfolioItems[(currentIndex - 1 + portfolioItems.length) % portfolioItems.length],
    );
  }, [activeItem]);

  useEffect(() => {
    if (!activeItem) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        navigateModalItem(-1);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        navigateModalItem(1);
      }
    };

    document.body.classList.add("modal-open");
    window.addEventListener("keydown", onKeyDown);
    window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeItem]);

  return (
    <section
      className="section content-section"
      id="selected-work"
      aria-labelledby="selected-work-title"
    >
      <div className="section-glow" aria-hidden="true" />
      <SectionHeader
        eyebrow="Selected Spine Work"
        id="selected-work-title"
        title="Selected Spine Work"
      />
      <p className="work-guidance section-reveal">Tap a symbol to reveal the motion.</p>
      <p className="section-copy section-reveal">
        A focused showcase of Spine rigs, character motion, UI animation, feature
        assets, and VFX.
      </p>
      <div className="work-gallery section-reveal">
        <div className="work-filters" aria-label="Work filters">
          {filters.map((filter) => (
            <button
              aria-pressed={filter.value === activeFilter}
              className="filter-chip"
              key={filter.value}
              onClick={() => handleFilterSelect(filter.value)}
              type="button"
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="work-card-grid" aria-label="Selected Spine work items">
          {filteredItems.map((item) => (
            <WorkCard
              isActive={item.id === activeItem?.id}
              item={item}
              key={item.id}
              onPrefetch={handleItemPrefetch}
              onSelect={handleItemSelect}
            />
          ))}
        </div>
      </div>

      {activeItem && (
        <div
          aria-describedby="work-modal-description"
          aria-labelledby="work-modal-title"
          aria-modal="true"
          className="work-modal"
          role="dialog"
        >
          <div aria-hidden="true" className="work-modal-backdrop" />
          <button
            aria-label="Previous work"
            className="work-modal-nav work-modal-nav-prev"
            onClick={() => navigateModalItem(-1)}
            type="button"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M15 5 8 12l7 7" />
            </svg>
          </button>
          <button
            aria-label="Next work"
            className="work-modal-nav work-modal-nav-next"
            onClick={() => navigateModalItem(1)}
            type="button"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="m9 5 7 7-7 7" />
            </svg>
          </button>
          <article className="work-modal-panel">
            <button
              aria-label="Close preview"
              className="work-modal-close"
              onClick={closeModal}
              ref={closeButtonRef}
              type="button"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
            <Suspense fallback={<SpinePreviewLoading />}>
              <SpinePreview
                activeAnimation={activeAnimation}
                item={activeItem}
              />
            </Suspense>
            <div className="work-modal-copy">
              <p className="modal-now-playing">Now Playing</p>
              <h3 id="work-modal-title">{activeItem.title}</h3>
              <p id="work-modal-description">{activeItem.description}</p>
              <AnimationTabs
                activeAnimation={activeAnimation}
                animations={activeItem.animations}
                onSelect={setActiveAnimation}
              />
            </div>
          </article>
        </div>
      )}
    </section>
  );
}
