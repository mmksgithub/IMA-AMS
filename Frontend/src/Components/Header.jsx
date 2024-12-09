import React, { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom"; // Import NavLink from React Router

import img from "../assets/img/ima-ams-logo.jpg";

const Header = () => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(() => {
    AOS.init(); // Initialize AOS animations
  }, []);

  const handleMobileNavToggle = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  const handleDropdownToggle = () => {
    setOpenDropdown(!openDropdown); // Toggle dropdown
  };

  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a href="index.html" className="logo d-flex align-items-center">
          <img src={img} className="header-logo" alt="IMA Logo" />
          <h1 className="sitename">IMA-AMS</h1>
        </a>

        <nav
          id="navmenu"
          className={`navmenu ${isMobileNavActive ? "mobile-nav-active" : ""}`}
        >
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="active-link">
                Home
              </NavLink>
            </li>
            <li>
            <NavLink to="/member-area" exact activeClassName="active-link">
            Member Area
              </NavLink>              
            </li>
            <li>
              <a href="courses.html">Membership</a>
            </li>
            <li>
           <NavLink to="/courses" exact activeClassName="active-link">
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink to="/scanner" activeClassName="active-link">
                QR-Code
              </NavLink>
            </li>
            <li>
              <NavLink to="/newsletter" activeClassName="active-link">
                NewsLetters
              </NavLink>
            </li>
            <li>
              <NavLink to="/annals" activeClassName="active-link">
                Annals
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" activeClassName="active-link">
                Gallery
              </NavLink>
            </li>

            <li className="dropdown">
              <a
                href="#"
                onClick={handleDropdownToggle}
                className="dropdown-toggle"
              >
                IMA-AMS
              </a>
              <ul
                className={`dropdown-menu ${
                  openDropdown ? "dropdown-open" : ""
                }`}
              >
                <li>
                <NavLink to="/constitution" activeClassName="active-link">
                Constitution
              </NavLink>                </li>
                <li>
                  <a href="#">Chapters</a>
                </li>
                <li>
                  <NavLink to="/gc-members" activeClassName="active-link">
                  Governing Council Members
              </NavLink>
                </li>
                <li>
                <NavLink to="/activity" activeClassName="active-link">
                Activity Reports
              </NavLink>
                </li>
                <li>
                  <NavLink to="/past-bearers" activeClassName="active-link">
                  Past Office Bearers
              </NavLink>
                </li>
                <li>
                  <NavLink to="/gc-minutes" activeClassName="active-link">
                  Governing Council Minutes
              </NavLink>
                </li>
                <li>
                  <NavLink to="/salutation" activeClassName="active-link">
                  IMA Flag Salutation              </NavLink>
                </li>
                <li>
                  <NavLink to="/prayer" activeClassName="active-link">
                  IMA Prayer            </NavLink>

                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active-link">
                Contact Us
              </NavLink>
            </li>

            <div className="login-button-container">
              <NavLink to="/login" className="btn btn-primary login-button">
                Login's
              </NavLink>
            </div>
          </ul>
        </nav>

        {/* Hamburger Icon */}
        <i
          className={`mobile-nav-toggle d-xl-none bi ${
            isMobileNavActive ? "bi-x" : "bi-list"
          }`}
          onClick={handleMobileNavToggle}
        />
      </div>
    </header>
  );
};

export default Header;
