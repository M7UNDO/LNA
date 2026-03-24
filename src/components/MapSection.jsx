import "../styles/Map.css";

export default function MapSection() {
  return (
    <section id="map-section">
      <div className="container">
        <h2>Our Location</h2>
        <p>Visit our offices or contact us for legal assistance.</p>

        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14304.31779865571!2d28.171631977697665!3d-26.323926721537013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e951be93742ab3d%3A0xe8054285e328f0fa!2s1754%20Thobejane%20Cres%2C%20Spruitview%2C%20Vosloorus%2C%201486!5e0!3m2!1sen!2sza!4v1774384100749!5m2!1sen!2sza"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
