import { SectionHeader } from "../components/SectionHeader";

const toolTags = ["Spine Preview", "WebP Export", "Validation", "Review Workflow"];

export function AnimationTools() {
  return (
    <section
      className="section content-section animation-tools-section"
      id="animation-tools"
      aria-labelledby="animation-tools-title"
    >
      <div className="section-glow section-glow-alt" aria-hidden="true" />
      <SectionHeader
        eyebrow="ANIMATION TOOLS"
        id="animation-tools-title"
        title="Animation Tools"
      />
      <p className="work-guidance section-reveal">BUILT FOR EXPORT REVIEW</p>
      <p className="section-copy section-reveal">
        A focused tool for checking Spine exports, validating playback, and speeding
        up animation review.
      </p>
      <div className="animation-tools-panel section-reveal">
        <article className="animation-tool-card">
          <div className="animation-tool-card-copy">
            <h3>WebP Skeleton Viewer</h3>
            <p>
              A lightweight Spine export viewer for testing JSON, atlas, and WebP/PNG
              files, reviewing animations, checking backgrounds, and validating
              playback before handoff. Files run locally in your browser and are not
              uploaded to a server.
            </p>
            <div className="tag-row animation-tool-tags" aria-label="Tool tags">
              {toolTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
          <a
            aria-label="Open WebP Skeleton Viewer in a new tab"
            className="button button-primary animation-tool-cta"
            href="/tools/webp-skeleton-viewer/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Open Viewer
          </a>
        </article>
      </div>
    </section>
  );
}
