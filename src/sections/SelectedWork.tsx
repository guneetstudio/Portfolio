import { Suspense, lazy, useEffect, useMemo, useRef, useState } from "react";
import { AnimationTabs } from "../components/AnimationTabs";
import { SectionHeader } from "../components/SectionHeader";
import { WorkCard } from "../components/WorkCard";
import {
  portfolioDisplayFolders,
  portfolioItems,
  type DisplayFolder,
  type PortfolioItem,
} from "../data/portfolioItems.generated";
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

const showWorkFilters = false;

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
  const [activeDisplayFolder, setActiveDisplayFolder] = useState<DisplayFolder>("Symbols");
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);
  const [activeAnimation, setActiveAnimation] = useState<string | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const lastFocusedElementRef = useRef<HTMLElement | null>(null);

  const filteredItems = useMemo(
    () =>
      portfolioItems.filter(
        (item) =>
          item.displayFolder === activeDisplayFolder && itemMatchesFilter(item, activeFilter),
      ),
    [activeDisplayFolder, activeFilter],
  );
  const handleDisplayFolderSelect = (displayFolder: DisplayFolder) => {
    setActiveDisplayFolder(displayFolder);
    setActiveItem(null);
    setActiveAnimation(null);
  };
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
    if (!activeItem || filteredItems.length === 0) return;

    const currentIndex = filteredItems.findIndex((item) => item.id === activeItem.id);
    const nextIndex =
      currentIndex === -1
        ? 0
        : (currentIndex + direction + filteredItems.length) % filteredItems.length;
    const nextItem = filteredItems[nextIndex];

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
    if (!activeItem || filteredItems.length === 0) return;

    const currentIndex = filteredItems.findIndex((item) => item.id === activeItem.id);
    if (currentIndex === -1) return;

    prefetchSpineAssets(filteredItems[(currentIndex + 1) % filteredItems.length]);
    prefetchSpineAssets(
      filteredItems[(currentIndex - 1 + filteredItems.length) % filteredItems.length],
    );
  }, [activeItem, filteredItems]);

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
        eyebrow="CASINO SLOT SYMBOLS"
        id="selected-work-title"
        title="Selected Spine Work"
      />
      <p className="work-guidance section-reveal">Tap a symbol to reveal the motion.</p>
      <div
        aria-label="Spine work folders"
        className="work-folder-selector section-reveal"
        role="group"
      >
        {portfolioDisplayFolders.map((folderOption) => (
          <button
            aria-pressed={folderOption.folder === activeDisplayFolder}
            className="filter-chip"
            key={folderOption.folder}
            onClick={() => handleDisplayFolderSelect(folderOption.folder)}
            type="button"
          >
            {folderOption.label}
          </button>
        ))}
      </div>
      <p className="section-copy section-reveal">
        A focused showcase of Spine rigs, character motion, UI animation, feature
        assets, and VFX.
      </p>
      <div className="work-gallery section-reveal">
        {/* Filter chips temporarily hidden. Restore when category filtering is needed. */}
        {showWorkFilters && (
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
        )}

        <div
          className="work-card-grid"
          aria-label={`${activeDisplayFolder} Spine work items`}
        >
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <WorkCard
                isActive={item.id === activeItem?.id}
                item={item}
                key={item.id}
                onPrefetch={handleItemPrefetch}
                onSelect={handleItemSelect}
              />
            ))
          ) : (
            <p className="work-folder-empty">No Spine items found in this folder yet.</p>
          )}
        </div>
      </div>

      {activeItem && (
        <div
          aria-label="Spine animation preview"
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
            {activeItem.animations.length > 1 && (
              <div className="work-modal-tabs">
                <AnimationTabs
                  activeAnimation={activeAnimation}
                  animations={activeItem.animations}
                  onSelect={setActiveAnimation}
                />
              </div>
            )}
          </article>
        </div>
      )}
    </section>
  );
}
