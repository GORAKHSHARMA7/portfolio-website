import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: "center", padding: "8rem 1.5rem" }}>
      <span className="eyebrow" style={{ justifyContent: "center" }}>404</span>
      <h1 style={{ marginTop: "1rem", fontSize: "2.4rem" }}>Page not found</h1>
      <p style={{ color: "var(--gray-600)", marginTop: "1rem" }}>
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link to="/" className="btn btn-primary" style={{ marginTop: "2rem", display: "inline-flex" }}>
        Back to Home
      </Link>
    </section>
  );
}
