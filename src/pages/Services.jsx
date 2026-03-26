import {Link} from "react-router-dom";
import "../styles/Services.css";

const services = [
  {
    id: "civil-litigation",
    title: "Civil Litigation",
    description:
      "Our Civil Litigation department is one of the firm’s strongest practice areas, providing strategic and results-driven representation in both the Magistrates Court and High Court. We handle a wide range of disputes, including contractual, delictual and commercial matters, with a focus on achieving efficient and favourable outcomes. With a deep understanding of legal processes and a competitive approach, we ensure that our clients’ interests are protected at every stage of litigation.",
  },
  {
    id: "labour-law",
    title: "Labour Law & Alternative Dispute Resolution",
    description:
      "We provide comprehensive legal support in all aspects of labour law, assisting both employers and employees in navigating complex workplace challenges. Our services include compliance audits, disciplinary processes, retrenchments, dispute resolution, and representation at the CCMA and bargaining councils. We are committed to protecting rights, ensuring fairness, and delivering practical solutions that minimise disruption while achieving just outcomes.",
  },
  {
    id: "family-law",
    title: "Family Law",
    description:
      "Our Family Law department offers sensitive, client-focused legal services designed to resolve disputes efficiently and respectfully. We specialise in mediation-based approaches that aim to reduce conflict while safeguarding the interests of all parties involved. Whether dealing with divorce, custody, or other family-related matters, we provide guidance that is both compassionate and legally sound.",
  },
  {
    id: "collections",
    title: "Corporate Collections",
    description:
      "We understand the financial impact of unpaid debts on businesses, which is why our Corporate Collections service is designed to deliver fast and effective recovery solutions. By implementing structured processes and leveraging advanced systems, we assist clients in tracing, managing and recovering outstanding debts. Our approach ensures minimal delays while maximising recovery rates in a cost-effective manner.",
  },
  {
    id: "commercial-law",
    title: "Corporate & Commercial Law",
    description:
      "Our Corporate and Commercial Law services are tailored to support businesses at every stage of their lifecycle. From drafting and reviewing contracts to advising on corporate structures, compliance and transactions, we provide strategic legal guidance that enables informed decision-making. We aim to protect your business interests while positioning you for sustainable growth and success.",
  },
  {
    id: "estates",
    title: "Trusts & Estates",
    description:
      "We offer expert guidance in estate planning and administration, helping clients secure their assets and plan for the future. Our services include the drafting of wills, establishment of trusts, and management of deceased estates. With a strong focus on long-term financial security, we ensure that your legacy is protected and your wishes are carried out with precision and care.",
  },
  {
    id: "conveyancing",
    title: "Conveyancing & Property Law",
    description:
      "Our Conveyancing department is known for its efficiency, precision and commitment to client satisfaction. We handle all aspects of property transactions, including transfers, drafting of agreements, and legal compliance processes. Whether dealing with residential or commercial property, we ensure that every transaction is completed smoothly, transparently and in accordance with the law.",
  },
];

function Services() {
  return (
    <section className="services">
      <div className="services-container">

        <div className="services-header">
          <h1>Our Practice Areas</h1>
          <p>
            At Ngengebule Attorneys, we provide a comprehensive range of legal services designed to meet the needs of
            individuals, businesses and communities. Our approach combines deep legal expertise with a commitment to
            integrity, efficiency and personalised service.
          </p>
        </div>

  
        <div className="services-grid">
          {services.map((service) => (
            <Link to={`/services/${service.id}`} key={service.id} className="service-panel">
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
