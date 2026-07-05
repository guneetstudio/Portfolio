import { SectionHeader } from "../components/SectionHeader";

const skills = [
  "Spine 2D",
  "Character Rigging",
  "Slot Game Animation",
  "UI Animation",
  "Feature Animation",
  "VFX",
  "Photoshop",
  "After Effects",
  "Cocos Creator",
  "Optimization",
  "Export Validation",
];

export function Skills() {
  return (
    <section className="section content-section" id="skills" aria-labelledby="skills-title">
      <div className="section-glow section-glow-alt" aria-hidden="true" />
      <SectionHeader
        eyebrow="Skills / Tools"
        id="skills-title"
        title="Skills / Tools"
      />
      <ul className="pill-list section-reveal" aria-label="Skills and tools">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
