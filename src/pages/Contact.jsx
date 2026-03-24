import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "../styles/Contact.css"

export default function Contact() {
  const container = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".contact-container", {
        opacity: 0,
        y: -15,
        duration: 0.5,
        ease: "power2.out",
      }).from(".contact-right-title", {
        opacity: 0,
        y: -15,
        duration: 0.5,
        ease: "power2.out",
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="contact-container">
      {/* LEFT SIDE */}
      <div className="contact-left">
        <h2>Our Details</h2>

        <div className="detail-block">
          <div className="value">
            
            {/* Physical Address */}
            <div className="contact-detail">
              <span className="material-symbols-outlined">location_on</span>
              <div className="contact-heading">
                <span className="label">Physical Address:</span>
                <h3>
                  1754 Thobejane Crescent, Spruitview, Katlehong, 1431
                </h3>
              </div>
            </div>

            {/* Postal Address */}
            <div className="contact-detail">
              <span className="material-symbols-outlined">mail</span>
              <div className="contact-heading">
                <span className="label">Postal Address:</span>
                <h3>P O Box 1494, Alberton</h3>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="contact-detail">
              <span className="material-symbols-outlined">chat</span>
              <div className="contact-heading">
                <span className="label">WhatsApp:</span>
                <h3>
                  <a href="tel:+27829283961">082 928 3961</a>
                </h3>
              </div>
            </div>

            {/* Office Line */}
            <div className="contact-detail">
              <span className="material-symbols-outlined">call</span>
              <div className="contact-heading">
                <span className="label">Office Line:</span>
                <h3>
                  <a href="tel:+27120073884">+27 12 007 3884</a>
                </h3>
              </div>
            </div>

            {/* Email */}
            <div className="contact-detail">
              <span className="material-symbols-outlined">mail</span>
              <div className="contact-heading">
                <span className="label">Email:</span>
                <h3>
                  <a href="mailto:info@ngengebule.co.za">
                    info@ngengebule.co.za
                  </a>
                </h3>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* RIGHT SIDE (FORM) */}
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="contact-right"
      >
        <div className="contact-inputs-holder">
          <div className="contact-right-title">
            <h2>Contact Us</h2>
            <hr className="animated-hr" />
            <p>
              We invite you to contact us through the form below. For your
              security, please do not share confidential information here.
              Sending a message through this form does not establish an
              attorney-client relationship.
            </p>
          </div>

          <input
            type="hidden"
            name="access_key"
            value="0db9ee02-e0bb-4070-854f-a01d4c7cbf17"
          />

          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            className="contact-inputs"
            required
          />

          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            className="contact-inputs"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="contact-inputs"
            required
          />

          <select
            name="service"
            className="contact-inputs select-line"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Select Service
            </option>
            <option value="Conveyancing">CONVEYANCING</option>
            <option value="Notary">NOTARY</option>
            <option value="Civil Litigation">CIVIL LITIGATION</option>
            <option value="Labour Law Disputes">
              LABOUR LAW DISPUTES
            </option>
            <option value="Deceased Estates & Estate Planning">
              DECEASED ESTATES & ESTATE PLANNING
            </option>
            <option value="Contractual Drafting and Dispute Resolution">
              CONTRACTUAL DRAFTING AND DISPUTE RESOLUTION
            </option>
            <option value="Trust Administration">
              TRUST ADMINISTRATION
            </option>
            <option value="Divorces">DIVORCES</option>
          </select>

          <textarea
            name="message"
            placeholder="Your Message"
            className="contact-inputs"
            required
          />

          <button type="submit">
            Contact Us
            <i className="fa-solid fa-envelope"></i>
          </button>
        </div>
      </form>
    </section>
  );
}