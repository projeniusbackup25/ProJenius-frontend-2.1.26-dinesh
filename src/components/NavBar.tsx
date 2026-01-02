import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../img/Background_videos&img/navbar_logo.png";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""} ${
        !isHomePage ? "solid" : ""
      }`}
    >
      <div className="navbar-container">

        {/* LOGO (REAL LINK) */}
        <a href="/" className="navbar-logo">
          <img src={logo} alt="ProJenius Logo" />
          <span className="brand-text">
            <span className="brand-pro">Pro</span>
            <span className="brand-Jenius">Jenius</span>
          </span>
        </a>

        {/* MAIN NAV */}
        <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About Us</Link>
          </li>

          {/* SERVICES (SEO PARENT) */}
          <li
            className="services-dropdown"
            onMouseEnter={() => !menuOpen && setServicesOpen(true)}
            onMouseLeave={() => !menuOpen && setServicesOpen(false)}
          >
            <Link to="/services" className="services-link">
              Services
            </Link>

            <ul className={`dropdown-menu ${servicesOpen ? "show" : ""}`}>
              <li>
                <Link to="/services/courses">Courses</Link>
              </li>
              <li>
                <Link to="/services/workshops">Workshops</Link>
              </li>
              <li>
                <Link to="/services/products">Products</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/blog">Blog</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>

        </ul>

        {/* HAMBURGER */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
