import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from "aos";

import img1 from "../assets/img/gallery/img1.jpg";
import img2 from "../assets/img/gallery/img2.jpg";
import img3 from "../assets/img/gallery/img3.jpg";
import img4 from "../assets/img/gallery/img4.jpg";
import img5 from "../assets/img/gallery/img5.jpg";
import img6 from "../assets/img/gallery/img6.jpg";
import img7 from "../assets/img/gallery/img7.jpg";
import img8 from "../assets/img/gallery/img8.jpeg";
import img9 from "../assets/img/gallery/img9.jpeg";
import img10 from "../assets/img/gallery/img10.jpeg";
import img11 from "../assets/img/gallery/img11.jpeg";
import img12 from "../assets/img/gallery/img12.jpeg";
import img13 from "../assets/img/gallery/img13.jpeg";

const Gallery = () => {
  useEffect(() => {
    // Initialize AOS animations
    AOS.init();
  }, []);

  return (
    <section id="events" className="events section">
      <div className="container" data-aos="fade-up">
        <div className="row">
          {/* Event 1 */}
          <div className="col-md-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div className="card">
              <div className="card-img">
                <img src={img1} alt="Event 1" />
              </div>
            </div>
          </div>

          {/* Event 2 */}
          <div className="col-md-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <div className="card">
              <div className="card-img">
                <img src={img2} alt="Event 2" />
              </div>
            </div>
          </div>

          {/* Event 3 */}
          <div className="col-md-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
            <div className="card">
              <div className="card-img">
                <img src={img3} alt="Event 3" />
              </div>
            </div>
          </div>

          {/* Event 4 */}
          <div className="col-md-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
            <div className="card">
              <div className="card-img">
                <img src={img4} alt="Event 4" />
              </div>
            </div>
          </div>

          {/* Event 5 */}
          <div className="col-md-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="500">
            <div className="card">
              <div className="card-img">
                <img src={img5} alt="Event 5" />
              </div>
            </div>
          </div>

          {/* Event 6 */}
          <div className="col-md-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="600">
            <div className="card">
              <div className="card-img">
                <img src={img6} alt="Event 6" />
              </div>
            </div>
          </div>

          {/* Event 7 */}
          <div className="col-md-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="700">
            <div className="card">
              <div className="card-img">
                <img src={img7} alt="Event 7" />
              </div>
            </div>
          </div>

          {/* Event 8 */}
          <div className="col-md-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="800">
            <div className="card">
              <div className="card-img">
                <img src={img8} alt="Event 8" />
              </div>
            </div>
          </div>

          {/* Event 9 */}
          <div className="col-md-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="900">
            <div className="card">
              <div className="card-img">
                <img src={img9} alt="Event 9" />
              </div>
            </div>
          </div>

          {/* Event 10 */}
          <div className="col-md-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="1000">
            <div className="card">
              <div className="card-img">
                <img src={img10} alt="Event 10" />
              </div>
            </div>
          </div>

          {/* Event 11 */}
          <div className="col-md-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="1100">
            <div className="card">
              <div className="card-img">
                <img src={img11} alt="Event 11" />
              </div>
            </div>
          </div>

          {/* Event 12 */}
          <div className="col-md-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="1200">
            <div className="card">
              <div className="card-img">
                <img src={img12} alt="Event 12" />
              </div>
            </div>
          </div>

          {/* Event 13 */}
          <div className="col-md-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="1300">
            <div className="card">
              <div className="card-img">
                <img src={img13} alt="Event 13" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
