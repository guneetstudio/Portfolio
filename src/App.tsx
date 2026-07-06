import { AnimationTools } from "./sections/AnimationTools";
import { CompactInfo } from "./sections/CompactInfo";
import { Hero } from "./sections/Hero";
import { SelectedWork } from "./sections/SelectedWork";
import { useEntranceAnimation } from "./hooks/useEntranceAnimation";
import { useSectionTransitions } from "./hooks/useSectionTransitions";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

export default function App() {
  useSmoothScroll();
  useEntranceAnimation();
  useSectionTransitions();

  return (
    <main className="site-shell">
      <Hero />
      <SelectedWork />
      <AnimationTools />
      <CompactInfo />
    </main>
  );
}
