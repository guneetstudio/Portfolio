type SectionHeaderProps = {
  eyebrow: string;
  id: string;
  title: string;
};

export function SectionHeader({ eyebrow, id, title }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
    </div>
  );
}
