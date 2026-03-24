import React, { useRef } from "react";
import Hero from "../components/Hero";
import ServiceContainer from "../components/ServiceContainer";
import "../styles/Home.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Home() {

  const commitmentRef = useRef();

  useGSAP(() => {

    gsap.from(".commitment-item", {
      scrollTrigger: {
        trigger: commitmentRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.25,
      ease: "power2.out"
    });

  }, { scope: commitmentRef });

  return (
    <>
      <Hero />

      <section className="practice-section">
        <h2 className="section-title">Practice Areas</h2>
        <ServiceContainer />
      </section>

      <section ref={commitmentRef} className="commitment-section">
        <div className="commitment-container">

          <h2 className="section-title">Our Commitment</h2>

          <p className="commitment-intro">
            We are committed to providing legal services with professionalism,
            integrity, and a deep understanding of our clients' needs.
          </p>

          <div className="commitment-grid">

            <div className="commitment-item">
              <div className="commitment-number">01</div>
              <h3>Honest Advice</h3>
              <p>
                Giving our clients objective, honest and personalised advice
                based on their best interests.
              </p>
            </div>

            <div className="commitment-item">
              <div className="commitment-number">02</div>
              <h3>Diligent Execution</h3>
              <p>
                Promptly, diligently and properly executing all mandates given
                to us by our clients.
              </p>
            </div>

            <div className="commitment-item">
              <div className="commitment-number">03</div>
              <h3>Client Understanding</h3>
              <p>
                Striving to understand the nature of our clients' businesses
                and transactions to apply our experience to their benefit.
              </p>
            </div>

            <div className="commitment-item">
              <div className="commitment-number">04</div>
              <h3>Integrity</h3>
              <p>
                Upholding the highest standards of honesty and integrity in
                all dealings with clients, colleagues and adversaries.
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default Home;