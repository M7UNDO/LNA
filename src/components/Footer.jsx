import "../styles/Footer.css";
import LogoDark from "../assets/LNA_Logo.svg";
import LogoLight from "../assets/LNA_Logo-light.svg";
import { useContext } from "react";
import ThemeContext from "../context/context";

export default function Footer() {
  const {theme, setTheme} = useContext(ThemeContext)
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <img className="logo" src={theme === "light"? LogoDark: LogoLight} alt="" />
            <p className="footer-tagline">Justice. Integrity. Excellence.</p>
            <p className="footer-founder">Founded by Luvuyo Gavin Ayanda Ngengebule</p>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>

            <p>Spruitview, Johannesburg</p>
            <p>Serving clients across Johannesburg</p>

            <p>
              <strong>Phone:</strong>
              <br />
              <a href="tel:+27829283961">+27 82 928 3961</a>
              <br />
              <a href="tel:+27614475504">+27 61 447 5504</a>
            </p>

            <p>
              <strong>PBX:</strong>
              <br />
              <a href="tel:+27120073884">+27 12 007 3884</a>
            </p>

            <p>
              <strong>Email:</strong>
              <br />
              <a href="mailto:info@ngengebule.co.za">info@ngengebule.co.za</a>
            </p>
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
              <a href="#">
                <i class="fi fi-brands-whatsapp"></i>
              </a>
              <a href="#">
                <i class="fi fi-brands-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Ngengebule Attorneys Inc. All rights reserved.</p>

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
