import { business } from "../data/business";
import PageHero from "../components/PageHero";
import { IconCheck, IconClock, IconPin, IconBadge, IconShield, IconUsers } from "../components/Icons";
import "./About.css";

const milestones = [
  { label: "Electronics, mobile, watch & instrument repair", detail: "Four trades under one roof" },
  { label: "Genuine & tested parts", detail: "Sourced and verified before use" },
  { label: "Local, walk-in friendly", detail: "Asuran Chowk, Shahpur, Gorakhpur" },
];

const values = [
  {
    icon: <IconBadge />,
    title: "Craftsmanship",
    text: "We treat every repair — a ₹50 cable or a vintage watch — with the same attention to detail.",
  },
  {
    icon: <IconShield />,
    title: "Honesty",
    text: "We tell customers exactly what's wrong and what it will cost before any work begins.",
  },
  {
    icon: <IconUsers />,
    title: "Community",
    text: "We're part of this neighbourhood — many of our customers have trusted us for years, across every device they own.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="About Shyama Tech Mart"
        description="A neighbourhood workshop built on one idea: things should be fixed properly, sold honestly, and explained clearly."
      />

      <section className="section">
        <div className="container about-intro">
          <div className="about-intro__text">
            <span className="eyebrow">Who We Are</span>
            <h2>One counter, four crafts</h2>
            <p>
              {business.name} began as a simple electronics repair counter in
              Shahpur and grew into a complete destination for electronics,
              mobile phones, watches and musical instruments. We repair what's
              broken, sell what's genuine, and stand behind both.
            </p>
            <p>
              Our team brings together technicians trained in circuit-level
              electronics repair, certified watchmaking know-how, and a real
              understanding of musical instrument electronics — a combination
              that's hard to find under a single roof.
            </p>
            <ul className="about-checklist">
              {milestones.map((m) => (
                <li key={m.label}>
                  <IconCheck width={18} height={18} />
                  <div>
                    <strong>{m.label}</strong>
                    <span>{m.detail}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="about-card">
            <div className="about-card__row">
              <IconPin width={20} height={20} />
              <div>
                <strong>Visit Us</strong>
                <p>{business.address}</p>
              </div>
            </div>
            <div className="about-card__row">
              <IconClock width={20} height={20} />
              <div>
                <strong>Store Hours</strong>
                {business.hours.map((h) => (
                  <p key={h.day}>
                    {h.day}: {h.time}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What We Stand For</span>
            <h2>Our values</h2>
          </div>

          <div className="values-grid">
            {values.map((v) => (
              <div className="why-card" key={v.title}>
                <div className="why-card__icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section--tight">
        <div className="container mission-band">
          <h2>Our mission</h2>
          <p>
            To be the most trusted name in Gorakhpur for electronics, watch and
            musical instrument repair — by combining real technical skill with
            honest service, one repair ticket at a time.
          </p>
        </div>
      </section>
    </>
  );
}
