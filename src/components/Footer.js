import React from 'react';
import './Footer.css';  // Make sure to import the CSS file

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; 2024 ALL NEWS. All rights reserved. Created by Bhanu</p>
      <div className="social-icons">
        <a href="https://github.com/bhanuprasadsamal" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://github.com/bhanuprasadsamal" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://github.com/bhanuprasadsamal" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://github.com/bhanuprasadsamal" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
