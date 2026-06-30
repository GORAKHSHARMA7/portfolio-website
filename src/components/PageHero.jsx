import "./PageHero.css";

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="page-hero">
      <div className="page-hero__bg" aria-hidden="true">
        <svg viewBox="0 0 200 120" preserveAspectRatio="none">
          <circle cx="175" cy="15" r="55" fill="none" stroke="rgba(37,99,235,0.10)" strokeWidth="0.6" />
          <circle cx="175" cy="15" r="38" fill="none" stroke="rgba(37,99,235,0.08)" strokeWidth="0.6" />
        </svg>
      </div>
      <div className="container page-hero__inner">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </section>
  );
}
