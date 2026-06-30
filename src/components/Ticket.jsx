export default function Ticket({
  no,
  status = "Available",
  icon,
  title,
  description,
  footerRight,
  footerLink,
  dark = false,
}) {
  return (
    <div className={`ticket ${dark ? "ticket--dark" : ""}`}>
      <div className="ticket__head">
        <span className="ticket__no">{no}</span>
        <span className="ticket__status">{status}</span>
      </div>
      {icon && <div className="ticket__icon">{icon}</div>}
      <h3>{title}</h3>
      <p>{description}</p>
      {(footerRight || footerLink) && (
        <div className="ticket__perf">
          {footerRight && <span className="ticket__price">{footerRight}</span>}
          {footerLink && (
            <a href={footerLink.href} onClick={footerLink.onClick}>
              {footerLink.label} →
            </a>
          )}
        </div>
      )}
    </div>
  );
}
