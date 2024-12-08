import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Breadcrumb = ({ title, description }) => {
  useEffect(() => {
    // Initialize AOS animations
    AOS.init();
  }, []);

  return (
    <div className="page-title" data-aos="fade">
      <div className="heading">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-8">
              <h1>{title}</h1> {/* Dynamic title */}
              <p className="mb-0">{description}</p> {/* Dynamic description */}
            </div>
          </div>
        </div>
      </div>
      <nav className="breadcrumbs">
        <div className="container">
          <ol>
            <li>
              <a href="/">Home</a>
            </li>
            <li className="current">{title}</li> {/* Current page title */}
          </ol>
        </div>
      </nav>
    </div>
  );
};

export default Breadcrumb;
