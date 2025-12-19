import React from "react";
import logowhite from "../assets/images/logo-white.png";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <img src={logowhite} alt="logo Kasa" className="footer-logo" />
      <div className="footer-text">
        <span className="copyright">© 2020 Kasa.</span>
        <span className="rights">All rights reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
