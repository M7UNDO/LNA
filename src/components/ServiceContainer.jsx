import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { servicesData } from "../data/services";
import ServiceCard from "../components/ServiceCard";
import "../styles/ServiceCard.css";

gsap.registerPlugin(useGSAP);

export default function ServiceContainer() {
  const container = useRef();

  useGSAP(() => {
    gsap.from(".service-card", {
      y: 50,
      opacity: 0,
      ease: "power2.out", // small improvement
      stagger: 0.1,
    });
  }, { scope: container });

  return (
    <section className="services-section">
      <div className="services-holder" ref={container}>
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