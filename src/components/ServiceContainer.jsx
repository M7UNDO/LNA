import {useRef} from "react";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import {servicesData} from "../data/services";
import ServiceCard from "../components/ServiceCard";
import "../styles/ServiceCard.css";

gsap.registerPlugin(useGSAP);

export default function ServiceContainer() {

  const container = useRef();

  useGSAP(()=>{
    gsap.from(".service-card", {
      y: 50,
      opacity: 0,
      ease: "power2.in",
      stagger: 0.1,
      
    }); 
  }, { scope: container });


  return (
    <section className="services-section">
      <div className="services-container" ref={container}>
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