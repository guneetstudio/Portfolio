import { Suspense, lazy, useState } from "react";

const HeroScene = lazy(async () => {
  const module = await import("../scenes/HeroScene");
  return { default: module.HeroScene };
});

export function Hero() {
  const [portraitFailed, setPortraitFailed] = useState(false);

  return (
    <section className="section hero-section" id="hero" aria-labelledby="hero-title">
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>
      <div className="hero-scrim" aria-hidden="true" />
      <div className="hero-content hero-layout">
        <div className="hero-copy-block">
          <p className="eyebrow hero-kicker hero-animate">2D Spine Animator Portfolio</p>
          <div className="hero-title-stage">
            <div className="hero-title-glow" aria-hidden="true" />
            <div className="hero-burst" aria-hidden="true">
              {Array.from({ length: 10 }, (_, index) => (
                <span key={index} />
              ))}
            </div>
            <h1 className="hero-title hero-animate" id="hero-title">
              Guneet Singh
            </h1>
          </div>
          <p className="hero-role hero-animate">
            2D Spine Animator for Casino & Slot Games
          </p>
          <p className="hero-copy hero-animate">
            Production-ready Spine rigs, character animation, UI motion, feature
            animations, and VFX for iGaming.
          </p>
          <div className="button-row hero-actions" aria-label="Primary actions">
            <a className="button button-primary hero-animate" href="#selected-work">
              View Work
            </a>
            <a
              className="button button-secondary hero-animate"
              download="Guneet-Singh-Resume.pdf"
              href="/guneet-singh-resume.pdf"
            >
              Download Resume
            </a>
          </div>
        </div>
        <figure
          className={`hero-portrait hero-animate ${portraitFailed ? "hero-portrait-fallback" : ""}`}
          aria-label="Portrait-led animation portfolio visual"
        >
          {portraitFailed ? (
            <span aria-hidden="true">GS</span>
          ) : (
            <img
              src="/hero-portrait.webp"
              alt="Guneet Singh 2D Spine Animator portrait"
              onError={() => setPortraitFailed(true)}
            />
          )}
        </figure>
      </div>
    </section>
  );
}
