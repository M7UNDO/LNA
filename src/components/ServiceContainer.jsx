import {servicesData} from "../data/services";
import ServiceCard from "../components/ServiceCard";
import "../styles/ServiceCard.css";

export default function ServiceContainer() {
  return (
    <section className="services-section">
      <div className="services-holder">
        {servicesData.map((service) => (
          <ServiceCard
            key={service.id}
            id={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}
