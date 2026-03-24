import "../styles/Map.css"

export default function MapSection() {
  return (
    <section id="map-section">

      <div className="container">

        <h2>Our Location</h2>
        <p>Visit our offices or contact us for legal assistance.</p>

        <div className="map-wrapper">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5056.117322799694!2d28.1907176968892!3d-26.351912171155757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e951c1005123755%3A0x9fa0b2851c3d85cd!2s866%20Thobejane%20St%2C%20Vosloorus%20Ext%201%2C%20Vosloorus%2C%201475!5e0!3m2!1sen!2sza!4v1765396445336!5m2!1sen!2sza"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>

      </div>

    </section>
  );
}