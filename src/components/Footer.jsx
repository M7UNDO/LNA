import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">

          <div className="footer-brand">
            <h2>NGENGEBULE ATTORNEYS INC</h2>
            <p className="footer-tagline">Justice. Integrity. Excellence.</p>
            <p className="footer-founder">
              Founded by Luvuyo Gavin Ayanda Ngengebule
            </p>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <p>Spruitview, Johannesburg</p>
            <p>Serving clients across Johannesburg</p>
            <p>Phone 1: +27(0)82 928 3961 </p>
            <p>Phone 2: +27(0)61 447 5504 </p>
            <p>PBX Landline: +27(0)012 007 3884 </p>
            
            <p>Email: <a href="mailto:info@ngengebule.co.za">info@ngengebule.co.za</a></p>
          </div>

          <div className="footer-services">
            <h4>Practice Areas</h4>
            <ul>
              <li>Civil Litigation</li>
              <li>Labour Law</li>
              <li>Commercial Litigation</li>
              <li>Contract Drafting & Vetting</li>
              <li>Estate Administration</li>
              <li>Divorce & Family Matters</li>
              <li>Road Accident Fund Claims</li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-icons">
              <a href="#">Facebook</a>
              <a href="#">LinkedIn</a>
              <a href="#">WhatsApp</a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Ngengebule Attorneys Inc. All rights reserved.
          </p>

          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms of Service</a>
            <span>|</span>
            <a href="#">PAIA Manual</a>
            <span>|</span>
            <a href="#">Sitemap</a>
          </div>

        </div>

      </div>
    </footer>
  );
}