import {NavLink, useLocation} from "react-router-dom";
import { useContext } from "react";
import "../styles/Navbar.css";
import LogoDark from "../assets/LNA_Logo.svg";
import LogoLight from "../assets/LNA_Logo-light.svg";
import ThemeToggle from "./ThemeToggle";
import ThemeContext from "../context/context";

function NavBar() {
  const {theme, setTheme} = useContext(ThemeContext);
  return (
    <nav className="navbar">
       <div className="nav-logo">
        <NavLink to="/"><img src={theme === "light" ? LogoDark : LogoLight} alt="Logo" /></NavLink>
        
       </div>
      <div className="navlinks">
        <NavLink to="/" className={({isActive}) => isActive? "active" : ""}>Home</NavLink>
        <NavLink to="/services" className={({isActive}) => isActive? "active" : ""}>Services</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive? "active" : ""}>About</NavLink>
        <NavLink to="/contact" className={({isActive}) => isActive? "active" : ""}>Contact</NavLink>
        <ThemeToggle/>
      </div>

    </nav>
  );
}

export default NavBar;
