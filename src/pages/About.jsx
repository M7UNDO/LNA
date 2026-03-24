import "../styles/About.css";
import LegalTeam from "../components/LegalTeam";
import ShinyOverlay from "../assets/backgrounds/Shiny-Overlay.svg";

export default function About() {
  return (
    <section className="about-page">
      <div className="about-hero" style={{backgroundImage: `url(${ShinyOverlay})`}}>
        <h1>About Ngengebule Attorneys Inc</h1>
        <p>Justice. Integrity. Excellence.</p>
      </div>

      <div className="about-container">
        <section className="about-section">
          <h2>History of the Firm</h2>
          <p>
            Ngengebule Attorneys Incorporated (LNA) was established in August 2020 by Luvuyo Gavin Ayanda Ngengebule.
            From its inception the firm has been guided by a strong work ethic built on integrity, reliability,
            professionalism, and a high standard of service.
          </p>

          <p>
            The firm has steadily grown while maintaining a commitment to providing dynamic and personalised legal
            services. Early in its development, the firm successfully represented a municipal manager in an unfair
            dismissal matter before the Labour Court, High Court and the CCMA, ultimately securing the relief due to the
            client and achieving a reported judgment.
          </p>

          <p>
            Since then, the firm has continued to expand its practice through matters involving civil and commercial
            litigation, labour law, contract drafting and advisory services, estate administration, divorce matters and
            Road Accident Fund claims.
          </p>
        </section>

        <section className="about-section">
          <h2>Company Overview</h2>
          <p>
            Ngengebule Attorneys Inc is a client-focused law firm committed to delivering high-quality legal services
            with diligence, integrity and personal attention. The firm prides itself on building strong and lasting
            relationships with clients while providing efficient and strategic legal solutions.
          </p>

          <p>
            Our approach combines traditional legal values with modern thinking, ensuring that clients receive practical
            legal advice aligned with current legal developments. We serve a diverse client base including individuals,
            families and small to medium-sized businesses.
          </p>
        </section>

        <section className="about-grid">
          <div className="about-card">
            <h3>Our Vision</h3>
            <p>
              To be a trusted and leading law firm that champions justice, empowers communities and contributes
              meaningfully to the transformation of South Africa's legal landscape.
            </p>
          </div>

          <div className="about-card">
            <h3>Our Mission</h3>
            <p>
              To deliver expert legal services that are accessible to local communities, ethical and tailored to the
              needs of our clients, while upholding the highest standards of professionalism and justice.
            </p>
          </div>
        </section>

        <section className="about-section">
          <h2>Our Core Values</h2>

          <div className="values-grid">
            <div className="value">
              <h4>Integrity</h4>
              <p>We act honestly and uphold the rule of law at all times.</p>
            </div>

            <div className="value">
              <h4>Client-Centered</h4>
              <p>We listen, understand and prioritise the needs of our clients.</p>
            </div>

            <div className="value">
              <h4>Excellence</h4>
              <p>We pursue quality and professionalism in every matter we handle.</p>
            </div>

            <div className="value">
              <h4>Confidentiality</h4>
              <p>Maintaining client trust and discretion is fundamental to our work.</p>
            </div>

            <div className="value">
              <h4>Transformation</h4>
              <p>
                We support a fair and inclusive legal system that contributes to the development of South Africa’s legal
                landscape.
              </p>
            </div>
          </div>
        </section>

        <LegalTeam />
      </div>
    </section>
  );
}
