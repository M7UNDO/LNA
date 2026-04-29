import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "../styles/ContactForm.css";

export default function ContactForm() {
  const container = useRef();
  const formRef = useRef();

  const [errors, setErrors] = useState({});

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

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
  };

  const validateForm = (formData) => {
    const newErrors = {};

    const firstName = formData.get("first_name").trim();
    const lastName = formData.get("last_name").trim();
    const email = formData.get("email").trim();
    const service = formData.get("service");
    const urgency = formData.get("urgency");
    const message = formData.get("message").trim();

    if (firstName.length < 2) {
      newErrors.first_name = "First name must be at least 2 characters.";
    }

    if (lastName.length < 2) {
      newErrors.last_name = "Last name must be at least 2 characters.";
    }

    if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!service) {
      newErrors.service = "Please select a service.";
    }

    if (!urgency) {
      newErrors.urgency = "Please select a matter type.";
    }

    if (message.length < 20) {
      newErrors.message = "Message must be at least 20 characters.";
    }

    if (message.length > 1000) {
      newErrors.message = "Message must be less than 1000 characters.";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(formRef.current);
    const validationErrors = validateForm(formData);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      formRef.current.submit();
    }
  };

  return (
    <section ref={container} className="contact-container">
      <div className="contact-left">
        {/* keep your contact-left content exactly the same */}
      </div>

      <form
        ref={formRef}
        action="https://api.web3forms.com/submit"
        method="POST"
        className="contact-right"
        onSubmit={handleSubmit}
        noValidate
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
            />
            {errors.first_name && <p className="form-error">{errors.first_name}</p>}
          </div>

          <div className="form-field">
            <label htmlFor="last_name">Last Name</label>
            <input
              id="last_name"
              type="text"
              name="last_name"
              placeholder="Enter your last name"
              className="contact-inputs"
            />
            {errors.last_name && <p className="form-error">{errors.last_name}</p>}
          </div>

          <div className="form-field">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="contact-inputs"
            />
            {errors.email && <p className="form-error">{errors.email}</p>}
          </div>

          <div className="form-field">
            <label htmlFor="service">Service Needed</label>
            <select
              id="service"
              name="service"
              className="contact-inputs select-line"
              defaultValue=""
            >
              <option value="" disabled>Select a service</option>
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
            {errors.service && <p className="form-error">{errors.service}</p>}
          </div>

          <div className="form-field">
            <label htmlFor="urgency">Matter Type</label>
            <select
              id="urgency"
              name="urgency"
              className="contact-inputs select-line"
              defaultValue=""
            >
              <option value="" disabled>Select matter type</option>
              <option value="General enquiry">General enquiry</option>
              <option value="Urgent matter">Urgent matter</option>
              <option value="Follow-up">Follow-up</option>
            </select>
            {errors.urgency && <p className="form-error">{errors.urgency}</p>}
          </div>

          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Briefly describe your legal matter. Please avoid sharing confidential details."
              className="contact-inputs"
            />
            {errors.message && <p className="form-error">{errors.message}</p>}
          </div>

          <button type="submit">Submit Enquiry</button>
        </div>
      </form>
    </section>
  );
}