import React from "react";
import {servicesData} from "../data/services";
import ServiceCard from "../components/ServiceCard";
import "../styles/ServiceCard.css";

export default function ServiceContainer() {
  return (
    <section className="services-section">
      <div className="services-container">
        {servicesData.map((service, index) => (
          <ServiceCard 
           key={index} 
           icon={service.icon}
           title={service.title}
           description={service.description}
          />
        ))}
      </div>
    </section>
  );
}