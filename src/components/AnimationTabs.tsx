type AnimationTabsProps = {
  activeAnimation: string | null;
  animations: string[];
  onSelect: (animation: string) => void;
};

export function AnimationTabs({
  activeAnimation,
  animations,
  onSelect,
}: AnimationTabsProps) {
  if (animations.length === 0) {
    return <p className="animation-tabs-empty">No detected animation names</p>;
  }

  return (
    <div className="animation-tabs" aria-label="Animation tabs" role="tablist">
      {animations.map((animation) => (
        <button
          aria-selected={animation === activeAnimation}
          className="animation-tab"
          key={animation}
          onClick={() => onSelect(animation)}
          role="tab"
          type="button"
        >
          {animation}
        </button>
      ))}
    </div>
  );
}
