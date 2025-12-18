import React from "react";
import "./Navbar.css";
import logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo du site Kasa" />
      </div>
      <div className="navbar-links">
        <span>Accueil</span>
        <span>À propos</span>
      </div>
    </nav>
  );
}

export default Navbar;
