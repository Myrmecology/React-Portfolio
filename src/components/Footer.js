import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a 
            href="https://www.freecodecamp.org/Myrmecology" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            FreeCodeCamp
          </a>
          <a 
            href="https://www.linkedin.com/in/justin-deines-70a10125/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/Myrmecology" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            GitHub
          </a>
        </div>
        <p className="copyright">© 2025 Justin Deines. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;