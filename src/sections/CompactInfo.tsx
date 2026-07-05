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

const roles = [
  {
    dates: "Feb 2026 - Present",
    studio: "Ruby Seven Studios",
    title: "2D Spine Animator",
  },
  {
    dates: "Aug 2024 - Feb 2026",
    studio: "Probability Gaming",
    title: "2D Spine Animator",
  },
  {
    dates: "Aug 2023 - Dec 2024",
    studio: "Freelance",
    title: "2D Animator",
  },
];

export function CompactInfo() {
  return (
    <section
      className="section content-section compact-info-section"
      id="contact"
      aria-labelledby="compact-info-title"
    >
      <div className="section-glow section-glow-alt" aria-hidden="true" />
      <div className="compact-info-panel section-reveal">
        <details className="info-card" open>
          <summary>
            <span>Skills / Tools</span>
          </summary>
          <ul className="compact-chip-list" aria-label="Skills and tools">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </details>

        <details className="info-card" open>
          <summary>
            <span id="compact-info-title">Experience</span>
          </summary>
          <div className="compact-timeline" aria-label="Experience">
            {roles.map((role) => (
              <article key={`${role.studio}-${role.dates}`}>
                <p>{role.dates}</p>
                <h3>{role.studio}</h3>
                <span>{role.title}</span>
              </article>
            ))}
          </div>
        </details>

        <details className="info-card" open>
          <summary>
            <span>Contact</span>
          </summary>
          <div className="compact-contact">
            <h3>Guneet Singh</h3>
            <p>2D Spine Animator - Casino & Slot Games</p>
            <a href="mailto:guneet.social@gmail.com">guneet.social@gmail.com</a>
            <div className="button-row compact-contact-actions">
              <a className="button button-primary" href="mailto:guneet.social@gmail.com">
                Email Me
              </a>
              <a
                className="button button-secondary"
                download="Guneet-Singh-Resume.pdf"
                href="/guneet-singh-resume.pdf"
              >
                Resume
              </a>
            </div>
          </div>
        </details>
      </div>
    </section>
  );
}
