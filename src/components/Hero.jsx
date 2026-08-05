import React from "react";
import "../styles/Hero.css";

export default function Hero({title, subheading, src, alt}) {
  return (
    <section className="hero-section">
      {src && alt && (
        <>
          <img src={src} alt={alt} className="hero-img"/>
        </>
      )}

      <div className="hero-content">
        <h1 className="hero-heading">{title}</h1>
        <p className="hero-subheading">{subheading}</p>
      </div>
    </section>
  );
}
