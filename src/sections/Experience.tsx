import { SectionHeader } from "../components/SectionHeader";

const roles = [
  "Ruby Seven Studios — 2D Spine Animator",
  "Probability Gaming — 2D Spine Animator",
  "Freelance 2D Animator",
];

export function Experience() {
  return (
    <section
      className="section content-section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="section-glow" aria-hidden="true" />
      <SectionHeader
        eyebrow="Experience"
        id="experience-title"
        title="iGaming animation experience"
      />
      <ul className="experience-list section-reveal" aria-label="Experience">
        {roles.map((role) => (
          <li key={role}>{role}</li>
        ))}
      </ul>
    </section>
  );
}
