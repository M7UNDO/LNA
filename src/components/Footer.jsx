import "../styles/Footer.css";
import LogoDark from "../assets/LNA_Logo.svg";
import LogoLight from "../assets/LNA_Logo-light.svg";
import {useContext} from "react";
import {Link} from "react-router-dom";
import ThemeContext from "../context/context";

export default function Footer() {
  const {theme, setTheme} = useContext(ThemeContext);
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <img className="logo" src={LogoLight} alt="" />
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
              <a href="tel:+27829283961" target="_blank">
                +27 82 928 3961
              </a>
              <br />
              <a href="tel:+27614475504" target="_blank">
                +27 61 447 5504
              </a>
            </p>

            <p>
              <strong>PBX:</strong>
              <br />
              <a href="tel:+27120073884" target="_blank">
                +27 12 007 3884
              </a>
            </p>

            <p>
              <strong>Email:</strong>
              <br />
              <a href="mailto:info@ngengebule.co.za" target="_blank">
                info@ngengebule.co.za
              </a>
            </p>
          </div>

          <div className="footer-services">
            <h4>Practice Areas</h4>
            <Link to="/practice-areas/"></Link>
            <ul>
              <li>
                <Link to="/practice-areas/civil-litigation">Civil Litigation</Link>
              </li>
              <li>
                <Link to="/practice-areas/labour-law">Labour Law & Alternative Dispute Resolution</Link>
              </li>
              <li>
                <Link to="/practice-areas/family-law">Family Law</Link>
              </li>
              <li>
                <Link to="/practice-areas/collections">Corporate Collections</Link>
              </li>
              <li>
                <Link to="/practice-areas/commercial-law">Corporate & Commercial Law</Link>
              </li>
              <li>
                <Link to="/practice-areas/estates">Trusts & Estates</Link>
              </li>
              <li>
                <Link to="/practice-areas/conveyancing">Conveyancing & Property Law</Link>
              </li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-icons">
              <a href="https://wa.me/27829283961" target="_blank">
                <i className="fi fi-brands-whatsapp"></i>
              </a>
              <a href="#" target="_blank">
                <i className="fi fi-brands-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Ngengebule Attorneys Inc. All rights reserved.</p>

          {/* <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms of Service</a>
            <span>|</span>
            <a href="#">PAIA Manual</a>
            <span>|</span>
            <a href="#">Sitemap</a>
          </div>*/}
        </div>
      </div>
    </footer>
  );
}
