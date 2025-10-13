import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>&copy; {currentYear} Muhammad Kamran Haider. All rights reserved.</p>
          </div>
          <div className="social-links">
            <a href="https://github.com/MKHOfficial" aria-label="GitHub">GitHub</a>
            <a href="https://www.linkedin.com/in/muhammad-kamran-haider-4536a4281/" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="Instagram">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;