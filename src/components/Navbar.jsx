import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { business, waLink, telLink } from "../data/business";
import { IconMenu, IconClose, IconWhatsapp, IconPhone, IconPin, IconClock } from "./Icons";
import "./Navbar.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      {/* QUICK-ACCESS INFO BAR — always visible, fixes "hard to find info" */}
      <div className="quickbar">
        <div className="container quickbar__inner">
          <a href={telLink(business.phonePrimary)} className="quickbar__item">
            <IconPhone width={14} height={14} />
            +91 {business.phonePrimary}
          </a>
          <a href={business.mapsLinkSrc} target="_blank" rel="noopener noreferrer" className="quickbar__item quickbar__item--hide-sm">
            <IconPin width={14} height={14} />
            {business.addressShort}
          </a>
          <span className="quickbar__item quickbar__item--hide-sm">
            <IconClock width={14} height={14} />
            Open Today: {business.hours[0].time}
          </span>
        </div>
      </div>

      <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="container navbar__inner">
          <NavLink to="/" className="navbar__brand" onClick={() => setOpen(false)}>
            <span className="navbar__mark">ST</span>
            <span className="navbar__brandtext">
              <strong>{business.name}</strong>
              <small>Repair &amp; Sales</small>
            </span>
          </NavLink>

          <nav className="navbar__links navbar__links--desktop" aria-label="Primary">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  "navbar__link" + (isActive ? " navbar__link--active" : "")
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="navbar__cta navbar__cta--desktop">
            <a href={telLink(business.phonePrimary)} className="btn btn-outline btn-sm">
              Call
            </a>
            <a
              href={waLink(business.whatsappPrimary)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm"
            >
              <IconWhatsapp width={16} height={16} />
              WhatsApp
            </a>
          </div>

          <button
            className="navbar__toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>

        <div className={`navbar__mobile ${open ? "navbar__mobile--open" : ""}`}>
          <nav className="navbar__links navbar__links--mobile" aria-label="Mobile">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  "navbar__link navbar__link--mobile" + (isActive ? " navbar__link--active" : "")
                }
              >
                {l.label}
              </NavLink>
            ))}
            <div className="navbar__mobile-cta">
              <a href={telLink(business.phonePrimary)} className="btn btn-outline btn-block">
                Call {business.phonePrimary}
              </a>
              <a
                href={waLink(business.whatsappPrimary)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-block"
              >
                <IconWhatsapp width={16} height={16} />
                WhatsApp Now
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
