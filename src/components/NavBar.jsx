import {NavLink, useLocation} from "react-router-dom";
import {useContext, useState, useEffect} from "react";
import "../styles/Navbar.css";
import LogoDark from "../assets/LNA_Logo.svg";
import LogoLight from "../assets/LNA_Logo-light.svg";
import ThemeToggle from "./ThemeToggle";
import ThemeContext from "../context/context";

function NavBar() {
  const {theme} = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className={`overlay ${menuOpen ? "active" : ""}`} onClick={closeMenu}></div>
      <nav className="navbar">
        <button
          className={`menu-toggle ${menuOpen ? "menu-open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="menu-lines"></span>
        </button>

        <div className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <div className="nav-logo">
            <NavLink to="/" onClick={closeMenu}>
              <img src={theme === "light" ? LogoDark : LogoLight} alt="Logo" />
            </NavLink>
          </div>

          <div className="navlinks">
            <NavLink to="/" onClick={closeMenu} className={({isActive}) => (isActive ? "active" : "")}>
              Home
            </NavLink>
            <NavLink to="/services" onClick={closeMenu} className={({isActive}) => (isActive ? "active" : "")}>
              Services
            </NavLink>
            <NavLink to="/about" onClick={closeMenu} className={({isActive}) => (isActive ? "active" : "")}>
              About
            </NavLink>
            <NavLink to="/contact" onClick={closeMenu} className={({isActive}) => (isActive ? "active" : "")}>
              Contact
            </NavLink>
            <ThemeToggle />
          </div>
        </div>

        <div className="nav-logo-mobile">
          <NavLink to="/" onClick={closeMenu}>
            <img src={theme === "light" ? LogoDark : LogoLight} alt="Logo" />
          </NavLink>
        </div>
      </nav>
      <div className="overlay"></div>
    </>
  );
}

export default NavBar;
