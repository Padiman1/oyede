import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="porsche-footer">
      <div className="porsche-footer-inner">
        {/* Contact Us Section */}
        <div className="porsche-footer-section">
          <h3 className="porsche-footer-title">Contact Us</h3>
          <div className="porsche-footer-contact">
            <p>
              <a href="mailto:info@oduonline.org">info@oduonline.org   </a>
            </p>
            {/* ||
            <p>
              <a
                href="https://www.oduonline.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                 www.oduonline.org
              </a>
            </p> */}
          </div>
        </div>

        {/* Quick Links Section */}
        {/* <div className="porsche-footer-section">
          <h3 className="porsche-footer-title">Quick Links</h3>
          <ul className="porsche-footer-links">
            <li>
              <a href="/about">About </a>
            </li>
          
            <li>
              <a href="/gallery">Gallery </a>
            </li>
          
            <li>
              <a href="/donate">Donate </a>
            </li>
          
            <li>
              <a href="/contact">Contact </a>
            </li>
          </ul>
        </div> */}
      </div>

      <div className="porsche-footer-bottom">
        &copy; {new Date().getFullYear()} Oyede Union. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
