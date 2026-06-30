import { useState } from "react";
import PageHero from "../components/PageHero";
import { galleryItems, galleryFilters } from "../data/gallery";
import { IconCircuit, IconWatch, IconKeyboard, IconMobile, IconTool, IconPlug } from "../components/Icons";
import "./Gallery.css";

const categoryIcon = {
  Workshop: <IconTool />,
  Watches: <IconWatch />,
  Electronics: <IconCircuit />,
  Instruments: <IconKeyboard />,
  Mobile: <IconMobile />,
  Store: <IconTool />,
  Accessories: <IconPlug />,
};

export default function Gallery() {
  const [filter, setFilter] = useState("All");

  const visible =
    filter === "All" ? galleryItems : galleryItems.filter((g) => g.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Take a Look"
        title="Inside the workshop"
        description="A glimpse of our store, repair bench and product counters. Replace these placeholders with your own photos any time."
      />

      <section className="section">
        <div className="container">
          <div className="gallery-filters">
            {galleryFilters.map((f) => (
              <button
                key={f}
                className={`gallery-filter ${filter === f ? "gallery-filter--active" : ""}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {visible.map((item) => (
              <figure className={`gallery-tile gallery-tile--${item.tone}`} key={item.id}>
                <div className="gallery-tile__icon">{categoryIcon[item.category]}</div>
                <figcaption>
                  <span>{item.category}</span>
                  <strong>{item.title}</strong>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
