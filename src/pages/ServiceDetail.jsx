import { useParams, Link } from "react-router-dom";
import { serviceDetailsData } from "../data/serviceDetailsData";
import "../styles/ServiceDetail.css";

function ServiceDetail() {
  const { id } = useParams();
  const service = serviceDetailsData[id];

  if (!service) return <p>Service not found</p>;

  return (
    <section className="service-detail">
      <div className="service-detail-container">

        <h1>{service.title}</h1>

        <p className="service-intro">{service.intro}</p>

        <div className="service-block">
          <h2>What We Offer</h2>
          <ul>
            {service.services.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="service-block">
          <h2>Our Approach</h2>
          <p>{service.approach}</p>
        </div>

        <div className="service-block">
          <h2>Why Choose Us</h2>
          <p>{service.whyChoose}</p>
        </div>

        <Link to="/services" className="back-link">
          ← Back to Services
        </Link>

      </div>
    </section>
  );
}

export default ServiceDetail;