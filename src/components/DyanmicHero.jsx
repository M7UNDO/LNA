import {Link} from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero1 from "../assets/hero/hennie-stander-uL_2nhIOvfM-unsplash.jpg";
import hero2 from "../assets/hero/pexels-nicola-barts-7927545.jpg";
import hero3 from "../assets/hero/rachel-martin-yHOhVzVRFMc-unsplash.jpg";

import "../styles/DynamicHero.css";

const slidesData = [
  {
    id: 1,
    title: "Professional Legal Services Close to Home",
    text: "Ngengebule Attorneys Inc provides reliable legal support to individuals, families, and businesses across Johannesburg and Gauteng. Situated within the jurisdiction of local courts, our firm also acts as correspondents for attorneys outside the jurisdiction for the receiving and serving of legal documents.",
    button: "View Our Practice Areas",
    page: "/practice-areas",
    image: hero1,
    alt: "Grayscale photo of Johannesburg city buildings",
  },
  {
    id: 2,
    title: "Legal Support You Can Trust",
    text: "From civil litigation and labour disputes to contract drafting, estate administration, divorce matters, and Road Accident Fund claims, our firm provides clear guidance and strong representation.",
    button: "Learn More About Us",
    page: "/about",
    image: hero2,
    alt: "Close-up of a businessman's hand holding a briefcase",
  },
  {
    id: 3,
    title: "Serving Our Community With Integrity",
    text: "Founded by Luvuyo Gavin Ayanda Ngengebule, our firm combines professional legal expertise with a commitment to accessible and client-focused legal representation.",
    button: "Contact Our Firm",
    page: "/contact",
    image: hero3,
    alt: "People crossing on pedestrian lane near buildings",
  },
];

export default function DynamicHero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
    arrows: false,
    pauseOnHover: false,
    swipeToSlide: true,
    touchThreshold: 15,
    cssEase: "cubic-bezier(0.25, 1, 0.5, 1)",
    dotsClass: "slick-dots hero-dots",
  };

  return (
    <section id="hero-banner">
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div key={slide.id} className="hero-slide-wrapper">
            <div className="hero-slide">
              <div className="dynamic-hero-content">
                <h1>{slide.title}</h1>
                <p>{slide.text}</p>
                <Link to={slide.page} className="cta-btn">
                  {slide.button}
                </Link>
              </div>

              <div className="banner-overlay" />

              <img
                className="hero-bg"
                src={slide.image}
                alt={slide.alt}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
