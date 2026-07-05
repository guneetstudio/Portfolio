import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useSectionTransitions() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      gsap.set(".section-reveal, .reveal", { autoAlpha: 1, clearProps: "transform" });
      return;
    }

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".content-section, .contact-section").forEach(
        (section) => {
          const targets = section.querySelectorAll<HTMLElement>(
            ".section-header, .section-reveal, .reveal",
          );

          gsap.fromTo(
            targets,
            {
              autoAlpha: 0,
              y: isMobile ? 16 : 28,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: isMobile ? 0.58 : 0.78,
              ease: "power3.out",
              stagger: isMobile ? 0.055 : 0.085,
              scrollTrigger: {
                trigger: section,
                start: isMobile ? "top 84%" : "top 76%",
                once: true,
              },
            },
          );
        },
      );

      if (!isMobile) {
        gsap.utils.toArray<HTMLElement>(".section-glow").forEach((glow) => {
          gsap.fromTo(
            glow,
            { y: -18 },
            {
              y: 18,
              ease: "none",
              scrollTrigger: {
                trigger: glow.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.8,
              },
            },
          );
        });
      }

      requestAnimationFrame(() => ScrollTrigger.refresh());
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
}
