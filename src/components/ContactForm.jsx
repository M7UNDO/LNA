import {useRef} from "react";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";

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
    {scope: container},
  );

  return (
    <section ref={container} className="contact-container">
      {/* Left Column */}
      <div className="contact-left">
        <div className="detail-block">
          <h2 className="label">Contact Details</h2>
          <div className="value">
            <div className="contact-detail">
              <span class="material-symbols-outlined">deskphone</span>
              <div className="contact-heading">
                <h3>PBX Landline:</h3>
                <a href="tel:+27120073884" target="_blank">
                  +27 12 007 3884
                </a>
              </div>
            </div>
            <div className="contact-detail">
              <span class="material-symbols-outlined">call</span>
              <div className="contact-heading">
                <h3>Mr. Ngengebule</h3>
                <a href="tel:+27829283961" target="_blank">
                  +27 82 928 3961
                </a>
              </div>
            </div>
            <div className="contact-detail">
              <span class="material-symbols-outlined">call</span>
              <div className="contact-heading">
                <h3>Ms. Tshabalala: </h3>
                <a href="tel:+27614475504" target="_blank">
                  +27 61 447 5504
                </a>
              </div>
            </div>
            <div className="contact-detail">
              <span class="material-symbols-outlined">mail</span>
              <div className="contact-heading">
                <h3>Email:</h3>
                <a href="mailto:info@ngengebule.co.za" target="_blank">
                  info@ngengebule.co.za
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="detail-block">
          <h2 className="label">Physical Address:</h2>
          <div className="value">
            <span>1754 Thobejane Crescent</span>
            <span>Spruitview</span>
            <span>1431</span>
            <span>c/o 75 Xavier Road</span>
            <span>Crown Gardens</span>
            <span>Johannesburg South</span>
          </div>
        </div>
      </div>

      {/* Right Column (Form) */}
      <form action="https://api.web3forms.com/submit" method="POST" className="contact-right">
        <div className="contact-right-title">
          <h1>Contact Us</h1>
          <hr className="animated-hr" />
          <p>
            We invite you to contact us through the form below. For your security, please do not share confidential
            information here. Sending a message through this form does not establish an attorney-client relationship.
          </p>
        </div>

        <div className="contact-inputs-holder">
          <input type="hidden" name="access_key" value="0db9ee02-e0bb-4070-854f-a01d4c7cbf17" />
          <input type="text" name="first_name" placeholder="First Name" className="contact-inputs" required />
          <input type="text" name="last_name" placeholder="Last Name" className="contact-inputs" required />
          <input type="email" name="email" placeholder="Email Address" className="contact-inputs" required />
          <select name="service" className="contact-inputs select-line" required defaultValue="">
            <option value="" disabled>
              Select Service
            </option>
            <option value="Conveyancing">CONVEYANCING</option>
            <option value="Notary">NOTARY</option>
            <option value="Civil Litigation">CIVIL LITIGATION</option>
            <option value="Labour Law Disputes">LABOUR LAW DISPUTES</option>
            <option value="Deceased Estates & Estate Planning">DECEASED ESTATES & ESTATE PLANNING</option>
            <option value="Contractual Drafting and Dispute Resolution">
              CONTRACTUAL DRAFTING AND DISPUTE RESOLUTION
            </option>
            <option value="Trust Administration">TRUST ADMINISTRATION</option>
            <option value="Divorces">DIVORCES</option>
          </select>
          <textarea name="message" placeholder="Your Message" className="contact-inputs" required />
          <button type="submit">
            Contact Us <i className="fa-solid fa-envelope"></i>
          </button>
        </div>
      </form>
    </section>
  );
}
