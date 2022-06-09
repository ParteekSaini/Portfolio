import React from "react";
import "./Footer.css";
import shapeBgImage from "../../../assets/Home/shape-bg.png";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img src={shapeBgImage} alt="no internet connection" />
      </div>
    </div>
  );
}

export default Footer;
