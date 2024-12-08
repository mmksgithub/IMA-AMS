import React from "react";
// Import any images if needed for the footer
// import logoImg from "../assets/img/logo.png"; // Example logo import

const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <footer id="footer" className="footer position-relative light-background">
        <div className="container footer-top">
          <div className="row gy-4">
            {/* Footer About Section */}
            <div className="col-lg-4 col-md-6 footer-about">
              <a href="index.html" className="logo d-flex align-items-center">
                <span className="sitenamef">IMA-AMS</span>
              </a>
              <div className="footer-contact pt-3">
                <p>IMA AMS Hqrs #102, IMA Building 2nd Floor, </p>
                <p> Esamia Bazar. Koti,Hyderabad, Telangana - 500 027</p>
                <p className="mt-3">
                  <strong>Phone:</strong> <span>040 24740015 / +91 9177115272</span>
                </p>
                <p>
                  <strong>Email:</strong> <span>imaamshyd@gmail.com</span>
                </p>
              </div>
              <div className="social-links d-flex mt-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-twitter" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-facebook" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin" />
                </a>
              </div>
            </div>

            {/* Useful Links Section */}
            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>

            {/* Our Services Section */}
            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <a href="#">Web Design</a>
                </li>
                <li>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <a href="#">Product Management</a>
                </li>
                <li>
                  <a href="#">Marketing</a>
                </li>
                <li>
                  <a href="#">Graphic Design</a>
                </li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div className="col-lg-4 col-md-12 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>
                Subscribe to our newsletter and receive the latest news about our products and services!
              </p>
              <form action="forms/newsletter.php" method="post" className="php-email-form">
                <div className="newsletter-form">
                  <input type="email" name="email" placeholder="Your email" />
                  <input type="submit" defaultValue="Subscribe" />
                </div>
                <div className="loading">Loading...</div>
                <div className="error-message" />
                <div className="sent-message">
                  Your subscription request has been sent. Thank you!
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="container copyright text-center mt-2">
          <p>
           <span>Copyright 2024  © </span>{" "}
            <strong className="px-1 sitenames">IMA-AMS</strong>{" "}
            <span>All Rights Reserved</span>
          </p>
          <div className="credits">
            Designed by : <a className="company" >TechnoSoftSolutions </a>
            
            <br />
            Cell : 7996734895 / 8296064895
            
           
          </div>
        </div>
      </footer>

      {/* Scroll Top Button */}
      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short" />
      </a>

      {/* Preloader */}
    </>
  );
};

export default Footer;
