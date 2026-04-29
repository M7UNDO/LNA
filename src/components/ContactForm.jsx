import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "../styles/ContactForm.css";

export default function ContactForm() {
  const container = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".contact-container", {
        opacity: 0,
        y: -15,
        duration: 0.5,
        ease: "power2.out",
      })
        .from(".contact-left", {
          opacity: 0,
          y: -15,
          duration: 0.5,
          ease: "power2.out",
        })
        .from(".contact-right-title", {
          opacity: 0,
          y: -15,
          duration: 0.5,
          ease: "power2.out",
        })
        .from(".contact-inputs-holder", {
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
      <div className="contact-left">
        <div className="detail-block">
          <h2>Contact Details</h2>

          <div className="details-holder">
            <div className="contact-detail">
              <i className="fa-solid fa-location-dot"></i>

              <div className="contact-heading">
                <h3>Location</h3>
                <p>
                  1754 Thobejane Crescent, Spruitview 1431, c/o 75 Xavier Road,
                  Crown Gardens, Johannesburg South
                </p>
              </div>
            </div>

            <div className="contact-detail">
              <i className="fa-solid fa-envelope"></i>

              <div className="contact-heading">
                <h3>Email</h3>
                <a href="mailto:info@ngengebule.co.za">
                  info@ngengebule.co.za
                </a>
              </div>
            </div>

            <div className="contact-detail">
              <i className="fa-solid fa-phone"></i>

              <div className="contact-heading">
                <h3>Phone</h3>
                <a href="tel:+27829283961">+27 82 928 3961</a>
              </div>
            </div>

            <div className="contact-detail">
              <i className="fa-brands fa-whatsapp"></i>

              <div className="contact-heading">
                <h3>WhatsApp</h3>
                <a
                  href="https://wa.me/27829283961"
                  target="_blank"
                  rel="noreferrer"
                >
                  +27 82 928 3961
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="contact-right"
      >
        <div className="contact-right-title">
          <h1>Contact Us</h1>
          <hr className="animated-hr" />

          <p>
            We invite you to contact us through the form below. For your
            security, please do not share confidential information here. Sending
            a message through this form does not establish an attorney-client
            relationship.
          </p>
        </div>

        <div className="contact-inputs-holder">
          <input
            type="hidden"
            name="access_key"
            value="0db9ee02-e0bb-4070-854f-a01d4c7cbf17"
          />

          <div className="form-field">
            <label htmlFor="first_name">First Name</label>
            <input
              id="first_name"
              type="text"
              name="first_name"
              placeholder="Enter your first name"
              className="contact-inputs"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="last_name">Last Name</label>
            <input
              id="last_name"
              type="text"
              name="last_name"
              placeholder="Enter your last name"
              className="contact-inputs"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="contact-inputs"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="service">Service Needed</label>
            <select
              id="service"
              name="service"
              className="contact-inputs select-line"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Select a service
              </option>
              <option value="Conveyancing">Conveyancing</option>
              <option value="Notary">Notary</option>
              <option value="Civil Litigation">Civil Litigation</option>
              <option value="Family Law">Family Law</option>
              <option value="Labour Law Disputes">Labour Law Disputes</option>
              <option value="Deceased Estates & Estate Planning">
                Deceased Estates & Estate Planning
              </option>
              <option value="Contractual Drafting and Dispute Resolution">
                Contractual Drafting and Dispute Resolution
              </option>
              <option value="Trust Administration">Trust Administration</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="urgency">Matter Type</label>
            <select
              id="urgency"
              name="urgency"
              className="contact-inputs select-line"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Select matter type
              </option>
              <option value="General enquiry">General enquiry</option>
              <option value="Urgent matter">Urgent matter</option>
              <option value="Follow-up">Follow-up</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Briefly describe your legal matter. Please avoid sharing confidential details."
              className="contact-inputs"
              required
            />
          </div>

          <button type="submit">Submit Enquiry</button>
        </div>
      </form>
    </section>
  );
}