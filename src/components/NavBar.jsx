import React from "react";
import {NavLink, useLocation} from "react-router-dom";
import "../styles/Navbar.css";
import Logo from "../assets/LNA_Logo-02.svg";

function NavBar() {
  return (
    <nav className="navbar">
       <div className="nav-logo">
        <NavLink to="/"><img src={Logo} alt="" /></NavLink>
       </div>
      <div className="navlinks">
        <NavLink to="/" className={({isActive}) => isActive? "active" : ""}>Home</NavLink>
        <NavLink to="/services" className={({isActive}) => isActive? "active" : ""}>Services</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive? "active" : ""}>About</NavLink>
        <NavLink to="/contact" className={({isActive}) => isActive? "active" : ""}>Contact</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
