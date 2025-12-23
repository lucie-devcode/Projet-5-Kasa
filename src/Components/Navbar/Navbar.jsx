import React from "react";
import "./Navbar.scss";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <div className="navbar-logo">
          <img src={logo} alt="Logo du site Kasa" />
        </div>
      </NavLink>
      <div className="navbar-links">
        <NavLink to="/" end>
          Accueil
        </NavLink>
        <NavLink to="/about">À propos</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
