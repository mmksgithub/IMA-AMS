import React, { useEffect } from 'react';
import img from '../assets/img/course-3.jpg'; // Image import
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styles
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS
import 'aos/dist/aos.css'; // AOS styles
import AOS from 'aos'; // AOS library

const Hero = () => {
  useEffect(() => {
    // Initialize AOS when the component is mounted
    AOS.init();
  }, []);

  return (
    <section id="hero" className="hero">
      {/* Hero Image */}
      <img
        src={img}
        className="main-img"
        alt="Hero Background"
      />

      {/* Hero Content */}
      {/* <div className="container">
        <h2  className='heading'>IMA_AMS</h2>
        <p>HI FROM AMS</p>
        <a href="#about" className="btn-get-started">
          Read More
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
