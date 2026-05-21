import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" style={{textDecoration: 'none'}}><h2>TRADE VIORA</h2></Link>
        </div>
        <div className="navbar-links">
          <Link to="/">Dashboard</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/resources">Resource Hub</Link>
          <Link to="/contact">Contact Support</Link>
        </div>
        <div className="navbar-cta">
          <Link to="/contact" className="btn btn-outline">Contact With Us</Link>
        </div>
      </div>
    </nav>
  );
}
