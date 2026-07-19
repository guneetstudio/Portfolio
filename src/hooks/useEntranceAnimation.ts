import { useEffect } from "react";
import gsap from "gsap";

export function useEntranceAnimation() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(".hero-animate", { autoAlpha: 1, clearProps: "transform" });
      gsap.set(".hero-intro-veil, .hero-title-glow, .hero-burst span", {
        autoAlpha: 0,
      });
      const reducedMotionFade = gsap.fromTo(
        ".hero-content",
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.18, ease: "none" },
      );
      return () => reducedMotionFade.kill();
    }

    const ctx = gsap.context(() => {
      gsap.set(".hero-title", { transformOrigin: "50% 58%" });
      gsap.set(".hero-intro-veil", { autoAlpha: 1 });
      gsap.set(".hero-title-glow, .hero-burst span", {
        autoAlpha: 0,
      });

      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      timeline
        .to(".hero-intro-veil", { autoAlpha: 0, duration: 0.56, ease: "power2.out" }, 0.04)
        .fromTo(
          ".hero-portrait",
          {
            autoAlpha: 0,
            y: 14,
            scale: 0.88,
            filter: "brightness(0.48) saturate(0.7)",
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            filter: "brightness(1) saturate(1)",
            duration: 0.58,
            ease: "back.out(1.22)",
          },
          0.06,
        )
        .fromTo(
          ".hero-title-glow",
          { autoAlpha: 0, scale: 0.42 },
          { autoAlpha: 0.95, scale: 1.12, duration: 0.34, ease: "power2.out" },
          0.22,
        )
        .to(
          ".hero-title-glow",
          { autoAlpha: 0, scale: 1.56, duration: 0.46, ease: "power3.out" },
          0.42,
        )
        .fromTo(
          ".hero-kicker",
          { autoAlpha: 0, y: 12 },
          { autoAlpha: 1, y: 0, duration: 0.36 },
          0.22,
        )
        .fromTo(
          ".hero-title",
          { autoAlpha: 0, y: 24, scale: 0.84, filter: "brightness(1.35)" },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            filter: "brightness(1)",
            duration: 0.5,
            ease: "back.out(1.72)",
          },
          0.28,
        )
        .fromTo(
          ".hero-burst span",
          { autoAlpha: 0, x: 0, y: 0, scale: 0.3, rotate: 0 },
          {
            autoAlpha: 1,
            x: (index) => [70, 118, 94, -84, -124, -74, 38, -36, 132, -116][index],
            y: (index) => [-54, -2, 54, 58, -14, -64, -86, 88, -74, 76][index],
            scale: (index) => [0.8, 1, 0.72, 0.84, 0.96, 0.68, 0.78, 0.72, 0.56, 0.58][index],
            rotate: (index) => [24, 78, 142, -28, -84, -136, 32, -52, 118, -102][index],
            duration: 0.34,
            stagger: 0.014,
            ease: "power2.out",
          },
          0.38,
        )
        .to(
          ".hero-burst span",
          {
            autoAlpha: 0,
            y: "+=16",
            scale: 0.15,
            duration: 0.34,
            stagger: 0.012,
            ease: "power3.in",
          },
          0.68,
        )
        .fromTo(
          ".hero-role",
          { autoAlpha: 0, y: 14 },
          { autoAlpha: 1, y: 0, duration: 0.32 },
          0.76,
        )
        .fromTo(
          ".hero-copy",
          { autoAlpha: 0, y: 14 },
          { autoAlpha: 1, y: 0, duration: 0.34 },
          0.92,
        )
        .fromTo(
          ".hero-actions .hero-animate",
          { autoAlpha: 0, y: 14, scale: 0.9 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.38,
            stagger: 0.08,
            ease: "back.out(1.55)",
          },
          1.12,
        );
    });

    return () => ctx.revert();
  }, []);
}
