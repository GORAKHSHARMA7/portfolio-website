import { business, waLink } from "../data/business";
import { productCategories } from "../data/products";
import PageHero from "../components/PageHero";
import { IconWhatsapp, IconArrowRight } from "../components/Icons";
import "./Products.css";

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title="Watches, keyboards, pads & accessories"
        description="Genuine products, fair pricing, and the same workshop standing behind every sale. Visit the store for a hands-on demo."
      />

      <section className="section">
        <div className="container">
          <div className="product-grid">
            {productCategories.map((cat) => (
              <div className="product-card" id={cat.id} key={cat.id}>
                <div className="product-card__head">
                  <span className="product-card__no">{cat.no}</span>
                  <div className="product-card__icon">{cat.icon}</div>
                </div>
                <h2>{cat.title}</h2>
                <p>{cat.description}</p>

                <ul className="product-items">
                  {cat.items.map((item) => (
                    <li key={item.name}>
                      <span>{item.name}</span>
                      <small>{item.note}</small>
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink(business.whatsappPrimary, `Hello, I'm interested in your ${cat.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm product-card__cta"
                >
                  Enquire on WhatsApp <IconArrowRight width={14} height={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section--tight product-note">
        <div className="container product-note__inner">
          <h2>Prices &amp; stock change often</h2>
          <p>
            New models arrive regularly and availability can shift week to
            week. For current pricing and stock, message us on WhatsApp or
            visit the store — we're happy to show you options in person.
          </p>
          <a
            href={waLink(business.whatsappPrimary)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <IconWhatsapp width={18} height={18} />
            Check Availability
          </a>
        </div>
      </section>
    </>
  );
}
