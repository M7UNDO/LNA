import { Link } from "react-router-dom";
import "../styles/Services.css";

const services = [
  {
    id: "civil-litigation",
    title: "Civil Litigation",
    description:
      "Expert representation in Magistrates and High Court disputes, including contractual and commercial matters.",
  },
  {
    id: "labour-law",
    title: "Labour Law & ADR",
    description:
      "Strategic legal support in employment disputes, compliance, and dispute resolution processes.",
  },
  {
    id: "family-law",
    title: "Family Law",
    description:
      "Sensitive and efficient mediation and legal solutions for family-related matters.",
  },
  {
    id: "collections",
    title: "Corporate Collections",
    description:
      "Efficient recovery of outstanding debts with structured and results-driven processes.",
  },
  {
    id: "commercial-law",
    title: "Corporate & Commercial Law",
    description:
      "Comprehensive legal support for businesses, contracts, and corporate structures.",
  },
  {
    id: "estates",
    title: "Trusts & Estates",
    description:
      "Secure your legacy with estate planning, wills, and trust management services.",
  },
  {
    id: "conveyancing",
    title: "Conveyancing & Property Law",
    description:
      "Professional handling of property transfers, agreements, and legal processes.",
  },
];

function Services() {
  return (
    <section className="services">
      <div className="services-container">
        
        {/* HEADER */}
        <div className="services-header">
          <h1>Our Legal Services</h1>
          <p>
            We provide expert legal solutions tailored to individuals,
            businesses, and communities.
          </p>
        </div>

        {/* GRID */}
        <div className="services-grid">
          {services.map((service) => (
            <Link
              to={`/services/${service.id}`}
              key={service.id}
              className="service-panel"
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-link">Learn More →</span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;