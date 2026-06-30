import { business, waLink } from "../data/business";
import { services, accessoriesBlurb } from "../data/services";
import PageHero from "../components/PageHero";
import { IconCheck, IconWhatsapp } from "../components/Icons";
import "./Services.css";

const allServices = [...services, accessoriesBlurb];

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Repair, service & sales — done right"
        description="From a cracked phone screen to a vintage watch movement to a keyboard that's gone silent — here's everything we handle."
      />

      <section className="section">
        <div className="container">
          <div className="service-detail-list">
            {allServices.map((s, i) => (
              <div className={`service-detail ${i % 2 === 1 ? "service-detail--reverse" : ""}`} key={s.title} id={s.id}>
                <div className="service-detail__visual">
                  <span className="service-detail__no">{s.no}</span>
                  <div className="service-detail__icon">{s.icon}</div>
                  <span className="service-detail__status">{s.status}</span>
                </div>
                <div className="service-detail__copy">
                  <h2>{s.title}</h2>
                  <p>{s.long}</p>
                  <ul className="service-points">
                    {s.points.map((p) => (
                      <li key={p}>
                        <IconCheck width={16} height={16} />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={waLink(business.whatsappPrimary, `Hello, I'd like to ask about ${s.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-sm"
                  >
                    <IconWhatsapp width={16} height={16} />
                    Ask About This
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band__inner">
          <div>
            <h2>Not sure what you need?</h2>
            <p>Describe the problem on WhatsApp and we'll guide you — no charge for advice.</p>
          </div>
          <div className="cta-band__actions">
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
