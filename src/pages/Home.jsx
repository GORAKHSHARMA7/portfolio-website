import { Link } from "react-router-dom";
import { business, waLink, telLink } from "../data/business";
import { services } from "../data/services";
import { testimonials } from "../data/testimonials";
import Ticket from "../components/Ticket";
import {
  IconWhatsapp,
  IconStar,
  IconShield,
  IconUsers,
  IconBadge,
  IconTimer,
  IconArrowRight,
  IconMobile,
  IconWatch,
  IconKeyboard,
  IconCircuit,
} from "../components/Icons";
import "./Home.css";

const whyChooseUs = [
  {
    icon: <IconBadge />,
    title: "Skilled, Experienced Hands",
    text: "Every repair is handled by technicians trained specifically in electronics, watchmaking or instrument electronics — not generalists.",
  },
  {
    icon: <IconShield />,
    title: "Honest Diagnosis & Pricing",
    text: "We tell you what's actually wrong before we touch anything, and quote a fair price upfront — no surprise charges at pickup.",
  },
  {
    icon: <IconTimer />,
    title: "Quick Turnaround",
    text: "Most mobile, electronics and watch repairs are completed same-day or within 24–48 hours.",
  },
  {
    icon: <IconUsers />,
    title: "Trusted Locally",
    text: "Years of serving Shahpur and Medical College Road — many of our customers come back for every device they own.",
  },
];

const quickFinder = [
  { icon: <IconMobile width={20} height={20} />, label: "Mobile Repair", to: "/services#mobile" },
  { icon: <IconWatch width={20} height={20} />, label: "Watch Service", to: "/services#watch" },
  { icon: <IconKeyboard width={20} height={20} />, label: "Keyboards", to: "/products#keyboards" },
  { icon: <IconCircuit width={20} height={20} />, label: "Electronics", to: "/services#electronics" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            <span className="eyebrow">Gorakhpur · Asuran Chowk</span>
            <h1>
              Repaired Right.<br />
              <span className="hero__accent">Built to Last.</span>
            </h1>
            <p>{business.subTagline} Electronics, mobiles, watches and musical instruments — repaired, serviced and sold under one roof.</p>

            <div className="hero__cta">
              <Link to="/contact" className="btn btn-primary">
                Contact Us <IconArrowRight width={16} height={16} />
              </Link>
              <a
                href={waLink(business.whatsappPrimary)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <IconWhatsapp width={18} height={18} />
                WhatsApp Now
              </a>
            </div>

            {/* QUICK FINDER — tap straight to what you need */}
            <div className="quick-finder">
              <p className="quick-finder__label">What do you need today?</p>
              <div className="quick-finder__grid">
                {quickFinder.map((q) => (
                  <Link to={q.to} className="quick-finder__item" key={q.label}>
                    <span className="quick-finder__icon">{q.icon}</span>
                    <span>{q.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="hero__stats">
              <div>
                <strong>4 Crafts</strong>
                <span>Under one roof</span>
              </div>
              <div>
                <strong>Same Day</strong>
                <span>Most repairs</span>
              </div>
              <div>
                <strong>Genuine</strong>
                <span>Parts &amp; products</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What We Do</span>
            <h2>Featured services</h2>
            <p>
              Four trades, one counter. Bring it in, and we'll tell you honestly
              what it needs.
            </p>
          </div>

          <div className="ticket-grid">
            {services.map((s) => (
              <Ticket
                key={s.title}
                no={s.no}
                status={s.status}
                icon={s.icon}
                title={s.title}
                description={s.short}
                footerLink={{ href: "/services", label: "Details" }}
              />
            ))}
          </div>

          <div className="section-foot">
            <Link to="/services" className="btn btn-outline">
              View All Services <IconArrowRight width={16} height={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why Customers Stay</span>
            <h2>Why choose {business.name}</h2>
            <p>What keeps people coming back for every device they own.</p>
          </div>

          <div className="why-grid">
            {whyChooseUs.map((w) => (
              <div className="why-card" key={w.title}>
                <div className="why-card__icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Customer Stories</span>
            <h2>What our customers say</h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((t) => (
              <div className="testimonial-card" key={t.name}>
                <div className="testimonial-card__stars">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <IconStar key={i} width={15} height={15} />
                  ))}
                </div>
                <p className="testimonial-card__quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="testimonial-card__person">
                  <div className="testimonial-card__avatar">{t.name.charAt(0)}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta-band">
        <div className="container cta-band__inner">
          <div>
            <h2>Have something that needs fixing?</h2>
            <p>Walk in, call ahead, or message us on WhatsApp — we'll take it from there.</p>
          </div>
          <div className="cta-band__actions">
            <a href={telLink(business.phonePrimary)} className="btn btn-outline-light">
              Call {business.phonePrimary}
            </a>
            <a
              href={waLink(business.whatsappPrimary)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <IconWhatsapp width={18} height={18} />
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
