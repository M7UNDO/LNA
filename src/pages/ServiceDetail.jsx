import { useParams, Link } from "react-router-dom";
import "../styles/ServiceDetail.css";

const serviceData = {
  "civil-litigation": {
    title: "Civil Litigation",
    content:
      "Our litigation department provides expert representation in contractual, delictual and commercial disputes in both the Magistrates Court and High Court.",
  },
  "labour-law": {
    title: "Labour Law & ADR",
    content:
      "We assist employers and employees in labour disputes, compliance, disciplinary processes, and CCMA representation.",
  },
  "family-law": {
    title: "Family Law",
    content:
      "We provide mediation-focused solutions for family disputes, ensuring efficient and respectful outcomes.",
  },
  "collections": {
    title: "Corporate Collections",
    content:
      "We implement structured processes to recover outstanding debts efficiently and effectively.",
  },
  "commercial-law": {
    title: "Corporate & Commercial Law",
    content:
      "We advise businesses on contracts, compliance, corporate structuring, and commercial transactions.",
  },
  "estates": {
    title: "Trusts & Estates",
    content:
      "We assist with estate planning, wills, and administration to protect your assets and legacy.",
  },
  "conveyancing": {
    title: "Conveyancing & Property Law",
    content:
      "We handle property transfers, agreements, and legal processes with efficiency and professionalism.",
  },
};

function ServiceDetail() {
  const { id } = useParams();
  const service = serviceData[id];

  if (!service) return <p>Service not found</p>;

  return (
    <section className="service-detail">
      <div className="service-detail-container">
        
        <h1>{service.title}</h1>
        <p>{service.content}</p>

        <Link to="/services" className="back-link">
          ← Back to Services
        </Link>

      </div>
    </section>
  );
}

export default ServiceDetail;