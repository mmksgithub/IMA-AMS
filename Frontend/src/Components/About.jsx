import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import img from "../assets/img/about.jpg";
const About = () => {
  return (
    <>
      {/* About Section */}
      <section id="about" className="about section">
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-6 order-1 order-lg-2"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <img src={img} className="img-fluid" alt="About us" />
            </div>
            <div
              className="col-lg-6 order-2 order-lg-1 content"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <h3>Voluptatem dignissimos provident quasi corporis</h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check-circle" />{" "}
                  <span>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check-circle" />{" "}
                  <span>
                    Duis aute irure dolor in reprehenderit in voluptate velit.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check-circle" />{" "}
                  <span>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate trideta
                    storacalaperda mastiro dolore eu fugiat nulla pariatur.
                  </span>
                </li>
              </ul>
              <a href="#" className="read-more">
                <span>Read More</span>
                <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* /About Section */}
    </>
  );
};

export default About;
