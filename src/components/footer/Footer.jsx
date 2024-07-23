import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Pradhumn Chandrawat</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#education" className="footer__link">
              Education
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/pradhumn-chandrawat-526a9b269/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://x.com/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">
          &copy;pradhumn chnadrawat, All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
