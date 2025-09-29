// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for internal routing
import '/src/LandingPage.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>FEATURES</h4>
          <ul>
            <li><Link to="/plan">Plan</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>PRODUCT</h4>
          <ul>
            <li><Link to="/pricing">Pricing</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>COMPANY</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>RESOURCES</h4>
          <ul>
            <li><Link to="/api">API</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>CONNECT</h4>
          <ul>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
