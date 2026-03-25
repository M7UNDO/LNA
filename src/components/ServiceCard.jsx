import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/ServiceCard.css";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceCard({ id, icon, title, description, delay = 0 }) {
  const cardRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 }, // start values
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
        delay: delay,
        scrollTrigger: {
          trigger: cardRef.current, // animate when this card enters viewport
          start: "top 90%",         // start animation slightly before fully in view
          toggleActions: "play none none none",
        },
      }
    );
  }, [delay]);

  return (
    <Link to={`/services/${id}`} className="service-card" ref={cardRef}>
      <span className="material-symbols-outlined">{icon}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  );
}