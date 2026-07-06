import { useEffect, useState } from "react";

type MascotSection = "hero" | "work" | "tools" | "contact";

const sectionMap: Array<{ id: string; section: MascotSection }> = [
  { id: "hero", section: "hero" },
  { id: "selected-work", section: "work" },
  { id: "animation-tools", section: "tools" },
  { id: "contact", section: "contact" },
];

export function MascotCompanion() {
  const [activeSection, setActiveSection] = useState<MascotSection>("hero");

  useEffect(() => {
    const sectionElements = sectionMap
      .map(({ id, section }) => {
        const element = document.getElementById(id);
        return element ? { element, section } : null;
      })
      .filter((item): item is { element: HTMLElement; section: MascotSection } => Boolean(item));

    if (sectionElements.length === 0) return;

    const visibleSections = new Map<MascotSection, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const matched = sectionElements.find((item) => item.element === entry.target);
          if (!matched) return;

          if (entry.isIntersecting) {
            visibleSections.set(matched.section, entry.intersectionRatio);
          } else {
            visibleSections.delete(matched.section);
          }
        });

        const nextSection = [...visibleSections.entries()].sort((a, b) => b[1] - a[1])[0]?.[0];
        if (nextSection) {
          setActiveSection(nextSection);
        }
      },
      {
        rootMargin: "-22% 0px -38%",
        threshold: [0.15, 0.35, 0.55, 0.75],
      },
    );

    sectionElements.forEach(({ element }) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`mascot-companion mascot-${activeSection}`}
    >
      <svg
        className="mascot-svg"
        viewBox="0 0 120 132"
        role="img"
      >
        <defs>
          <radialGradient id="mascotBodyGlow" cx="44%" cy="30%" r="72%">
            <stop offset="0%" stopColor="#ffdf8f" />
            <stop offset="44%" stopColor="#ff8a25" />
            <stop offset="100%" stopColor="#6d2554" />
          </radialGradient>
          <linearGradient id="mascotChipGold" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#ffe4a6" />
            <stop offset="52%" stopColor="#f4bd62" />
            <stop offset="100%" stopColor="#d88627" />
          </linearGradient>
          <filter id="mascotSoftGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
            <feColorMatrix
              in="blur"
              values="1 0 0 0 1 0 1 0 0 .42 0 0 1 0 .62 0 0 0 .48 0"
            />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g className="mascot-sparkles">
          <path d="M22 35l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" />
          <path d="M95 28l2.3 5 5 2.3-5 2.2-2.3 5.2-2.2-5.2-5.1-2.2 5.1-2.3z" />
          <circle cx="96" cy="96" r="2.3" />
        </g>

        <g className="mascot-shadow">
          <ellipse cx="62" cy="116" rx="30" ry="8" />
        </g>

        <g className="mascot-tilt" filter="url(#mascotSoftGlow)">
          <path
            className="mascot-crown"
            d="M42 32l8-14 10 11 12-13 7 16c-11 5-25 5-37 0z"
          />
          <path
            className="mascot-body"
            d="M32 64c0-24 12-38 31-38s31 14 31 38v18c0 20-13 32-31 32S32 102 32 82z"
          />
          <path className="mascot-face-glow" d="M44 58c5-11 29-12 38 0 1 16-5 27-19 27S43 74 44 58z" />
          <path className="mascot-chip" d="M46 99c8 8 25 8 34 0-5 8-12 12-17 12s-12-4-17-12z" />

          <g className="mascot-eyes">
            <path className="mascot-eye mascot-eye-left" d="M48 63c1-5 8-5 9 0 0 6-9 6-9 0z" />
            <path className="mascot-eye mascot-eye-right" d="M69 63c1-5 8-5 9 0 0 6-9 6-9 0z" />
            <path className="mascot-eye-shine mascot-eye-shine-left" d="M52 58l1.4 3 3 1.3-3 1.3-1.4 3-1.3-3-3-1.3 3-1.3z" />
            <path className="mascot-eye-shine mascot-eye-shine-right" d="M73 58l1.4 3 3 1.3-3 1.3-1.4 3-1.3-3-3-1.3 3-1.3z" />
            <path className="mascot-blink" d="M47 63c4 2 8 2 11 0M68 63c4 2 8 2 11 0" />
          </g>

          <path className="mascot-smile" d="M54 77c5 5 13 5 18 0" />
          <path className="mascot-work-smirk" d="M55 76c4 3 10 4 18 1" />
          <path className="mascot-tools-mouth" d="M56 76c5 6 12 6 18 0" />

          <g className="mascot-rim">
            <path d="M37 55c5-15 16-23 27-23" />
            <path d="M87 58c-2-12-9-21-20-25" />
          </g>

          <g className="mascot-arm mascot-arm-left">
            <path d="M34 75c-11 4-17 11-17 18" />
            <circle cx="17" cy="94" r="5" />
          </g>
          <g className="mascot-arm mascot-arm-right">
            <path d="M91 74c12 2 18 8 20 18" />
            <circle cx="111" cy="93" r="5" />
          </g>

          <g className="mascot-pointer">
            <path d="M91 78c13-1 21 3 25 10" />
            <path d="M112 86l5 3-6 2" />
          </g>

          <g className="mascot-tool">
            <circle cx="98" cy="84" r="10" />
            <path d="M105 91l10 10" />
          </g>
        </g>
      </svg>
    </div>
  );
}
