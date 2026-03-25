import {useEffect, useRef} from "react";
import {Link} from "react-router-dom";
import {gsap} from "gsap";
import "../styles/Hero.css";

import hero1 from "../assets/hero/hennie-stander-uL_2nhIOvfM-unsplash.webp";
import hero2 from "../assets/hero/pexels-nicola-barts-7927545.webp";
import hero3 from "../assets/hero/rachel-martin-yHOhVzVRFMc-unsplash.webp";

const slidesData = [
  {
    id: 1,
    title: "Professional Legal Services Close to Home",
    text: "Ngengebule Attorneys Inc provides reliable legal support to individuals, families, and businesses across Johannesburg and Gauteng. Situated within the jurisdiction of local courts, our firm also acts as correspondents for attorneys outside the jurisdiction for the receiving and serving of legal documents.",
    button: "View Our Services",
    page: "/services",
    image: hero1,
  },
  {
    id: 2,
    title: "Legal Support You Can Trust",
    text: "From civil litigation and labour disputes to contract drafting, estate administration, divorce matters, and Road Accident Fund claims, our firm provides clear guidance and strong representation.",
    button: "Learn More About Us",
    page: "/about",
    image: hero2,
  },
  {
    id: 3,
    title: "Serving Our Community With Integrity",
    text: "Founded by Luvuyo Gavin Ayanda Ngengebule, our firm combines professional legal expertise with a commitment to accessible and client-focused legal representation.",
    button: "Contact Our Firm",
    page: "/contact",
    image: hero3,
  },
];

export default function Hero() {
  const slidesRef = useRef([]);
  const dotsRef = useRef([]);
  const intervalRef = useRef(null);
  const currentRef = useRef(0);

  useEffect(() => {
    const slides = slidesRef.current;
    const dots = dotsRef.current;

    if (!slides.length) return;

    let current = 0;


    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
        dots[i].classList.toggle("active", i === index);
      });

      const content = slides[index].querySelector(".hero-content");

      gsap.killTweensOf(content);

      gsap.fromTo(
        content,
        {autoAlpha: 0, y: 50},
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
        },
      );

      current = index;
      currentRef.current = index;
    };

    const nextSlide = () => {
      const next = (currentRef.current + 1) % slides.length;
      showSlide(next);
    };

    const startInterval = () => {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(nextSlide, 6000);
    };

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        showSlide(i);
        startInterval();
      });
    });


    const swipeThreshold = 50;
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      touchEndX = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      const distance = touchStartX - touchEndX;

      if (Math.abs(distance) < swipeThreshold) return;

      if (distance > 0) {
        nextSlide(); 
      } else {
        const prev = (currentRef.current - 1 + slides.length) % slides.length;
        showSlide(prev);
      }

      startInterval(); 
    };

    const banner = document.getElementById("hero-banner");

    banner.addEventListener("touchstart", handleTouchStart);
    banner.addEventListener("touchmove", handleTouchMove);
    banner.addEventListener("touchend", handleTouchEnd);

    showSlide(0);
    startInterval();


    return () => {
      clearInterval(intervalRef.current);

      banner.removeEventListener("touchstart", handleTouchStart);
      banner.removeEventListener("touchmove", handleTouchMove);
      banner.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <section id="hero-banner">
      {slidesData.map((slide, index) => (
        <div key={slide.id} className="hero-slide" ref={(el) => (slidesRef.current[index] = el)}>
          <div className="hero-content">
            <h1>{slide.title}</h1>
            <p>{slide.text}</p>
            <Link to={slide.page} className="cta-btn">
              {slide.button}
            </Link>
          </div>

          <div className="banner-overlay"></div>

          <img
            className="hero-bg"
            src={slide.image}
            alt=""
            loading={index === 0 ? "eager" : "eager"} // 🔥 preload all (important)
          />
        </div>
      ))}

      <div className="hero-dots">
        {slidesData.map((_, index) => (
          <button key={index} className="dot" ref={(el) => (dotsRef.current[index] = el)} />
        ))}
      </div>
    </section>
  );
}
