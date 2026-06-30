import { business, waLink } from "../data/business";
import { IconWhatsapp } from "./Icons";
import "./FloatingWhatsapp.css";

export default function FloatingWhatsapp() {
  return (
    <a
      href={waLink(business.whatsappPrimary)}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-wa"
      aria-label="Chat with us on WhatsApp"
    >
      <IconWhatsapp width={26} height={26} />
      <span className="floating-wa__ping" />
    </a>
  );
}
