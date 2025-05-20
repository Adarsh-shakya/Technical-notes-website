import React from "react";
import './footer.css';
import { FaLinkedin, FaGithub, FaYoutube, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo">
          <h2>The <span className="highlight">Shakya</span></h2>
          <p>"Learn. Reflect. Rise."</p>
          <p>&copy; 2025 The Shakya</p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/notes">Notes</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>Email: theshakya@email.com</p>
          <p>Phone: +91-XXXXXXXXXX</p>
          <p>Etah, Uttar Pradesh</p>
          <div className="socials">
            <a href="https://www.linkedin.com/in/yourname" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com/yourid" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Built with ❤️ by Adarsh Shakya</p>
      </div>
    </footer>
  );
};

export default Footer;
