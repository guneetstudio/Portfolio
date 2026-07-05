import { SectionHeader } from "../components/SectionHeader";

export function Contact() {
  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="section-glow section-glow-alt" aria-hidden="true" />
      <SectionHeader
        eyebrow="Contact"
        id="contact-title"
        title="Guneet Singh"
      />
      <div className="contact-panel section-reveal">
        <div>
          <p className="contact-role">2D Spine Animator — Casino & Slot Games</p>
          <p className="contact-email">Email placeholder</p>
        </div>
        <div className="button-row contact-actions">
          <a className="button button-primary" href="mailto:hello@example.com">
            Email Me
          </a>
          <a
            className="button button-secondary"
            download="Guneet-Singh-Resume.pdf"
            href="/guneet-singh-resume.pdf"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
