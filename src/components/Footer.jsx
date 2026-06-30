import { Link } from "react-router-dom";
import { business, telLink, waLink } from "../data/business";
import {
  IconFacebook,
  IconInstagram,
  IconYoutube,
  IconPhone,
  IconMail,
  IconPin,
} from "./Icons";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__col footer__brand">
          <div className="footer__logo">
            <span className="navbar__mark">ST</span>
            <div>
              <strong>{business.name}</strong>
              <p>{business.tagline}</p>
            </div>
          </div>
          <p className="footer__about">
            Gorakhpur's trusted workshop for electronics, mobile, watch and
            musical instrument repair — plus genuine watches, keyboards, pads
            and spare parts.
          </p>
          <div className="footer__social">
            <a href={business.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <IconFacebook width={18} height={18} />
            </a>
            <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <IconInstagram width={18} height={18} />
            </a>
            <a href={business.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <IconYoutube width={18} height={18} />
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Our Services</h4>
          <ul>
            <li><Link to="/services">Electronics Repair</Link></li>
            <li><Link to="/services">Mobile Repair</Link></li>
            <li><Link to="/services">Watch Repair &amp; Sales</Link></li>
            <li><Link to="/services">Musical Keyboard &amp; Pad Sales</Link></li>
            <li><Link to="/services">Musical Instrument Repair</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Get In Touch</h4>
          <ul className="footer__contact">
            <li>
              <IconPhone width={16} height={16} />
              <a href={telLink(business.phonePrimary)}>+91 {business.phonePrimary}</a>
            </li>
            <li>
              <IconPhone width={16} height={16} />
              <a href={telLink(business.phoneSecondary)}>+91 {business.phoneSecondary}</a>
            </li>
            <li>
              <IconMail width={16} height={16} />
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </li>
            <li>
              <IconPin width={16} height={16} />
              <span>{business.addressShort}</span>
            </li>
          </ul>
          <a
            href={waLink(business.whatsappPrimary)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm"
            style={{ marginTop: "0.9rem" }}
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {year} {business.name}. All rights reserved.</p>
          <p>Designed for precision repair &amp; trusted sales.</p>
        </div>
      </div>
    </footer>
  );
}
