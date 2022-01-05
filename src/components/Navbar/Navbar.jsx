import React, { useState } from "react";
import { Link } from "react-router-dom";
// Css
import "./Navbar.css";

export const Navbar = () => {
  const [isMobile, setMobile] = useState(false);
  return (
    <nav className="navbar">
      <h3 className="logo">My Portfolio</h3>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={()=>setMobile(false)}>
        <Link to="/" className="home">
          <li>Home</li>
        </Link>
        <Link to="/about" className="about">
          <li>About</li>
        </Link>
        <Link to="/projects" className="projects">
          <li>Projects</li>
        </Link>
        <Link to="/contact" className="contact">
          <li>Contact</li>
        </Link>
      </ul>
      <button className="mobile-menu-icon" onClick={()=>setMobile(!isMobile)}>
        <i className="fas fa-bars"></i>
      </button>
    </nav>
  );
};


