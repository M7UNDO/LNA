import {useState, useEffect, useRef} from "react";
import {gsap} from "gsap";
import "../styles/Hero.css";
import hero1 from "../assets/hero/hennie-stander-uL_2nhIOvfM-unsplash.jpg";
import hero2 from "../assets/hero/pexels-nicola-barts-7927545.jpg";
import hero3 from "../assets/hero/rachel-martin-yHOhVzVRFMc-unsplash.jpg";

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const contentRef = useRef(null);

  const slides = [
  {
    title: "Professional Legal Services Close to Home",
    text: "Ngengebule Attorneys Inc provides reliable legal support for individuals, families, and businesses across Johannesburg, with a strong commitment to justice, integrity, and excellence.",
    button: "View Our Services",
    image: hero1,
  },
  {
    title: "Legal Support You Can Trust",
    text: "From civil litigation and labour disputes to contract drafting, estate administration, divorce matters, and Road Accident Fund claims, our firm provides clear guidance and strong representation.",
    button: "Explore Our Practice Areas",
    image: hero2,
  },
  {
    title: "Serving Our Community With Integrity",
    text: "Founded by Luvuyo Gavin Ayanda Ngengebule, our firm combines professional legal expertise with a commitment to accessible and client-focused legal representation.",
    button: "Contact Our Firm",
    image: hero3,
  },
];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(contentRef.current, {autoAlpha: 0, y: 50}, {duration: 1.2, autoAlpha: 1, y: 0, ease: "power3.out"});
    }
  }, [current]);

  return (
    <section id="hero-banner">
      {slides.map((slide, index) => (
        <div key={index} className={`hero-slide ${index === current ? "active" : ""}`}>
          <div className="hero-content" ref={index === current ? contentRef : null}>
            <h1>{slide.title}</h1>
            <p>{slide.text}</p>
            <a href="#" className="cta-btn">
              {slide.button}
            </a>
          </div>

          <div className="banner-overlay"></div>

          <img className="hero-bg" src={slide.image} alt="" />
        </div>
      ))}

      <div className="hero-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}
