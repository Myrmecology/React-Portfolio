// Header.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <h1>Justin Portfolio</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <Link 
              to="/about" 
              className={isActive('/about') ? 'active' : ''}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link 
              to="/portfolio" 
              className={isActive('/portfolio') ? 'active' : ''}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={isActive('/contact') ? 'active' : ''}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link 
              to="/resume" 
              className={isActive('/resume') ? 'active' : ''}
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;