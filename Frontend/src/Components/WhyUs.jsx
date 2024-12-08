import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyUs = () => {
  useEffect(() => {
    // Initialize AOS library for animations
    AOS.init();
  }, []);

  return (
    <>
      {/* Why Us Section */}
      <section id="why-us" className="section why-us">
        <div className="container">
          <div className="row gy-4">
            {/* Why Box */}
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
              <div className="why-box">
                <h3>Why Choose Our Products?</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Duis aute irure dolor in reprehenderit Asperiores dolores sed
                  et. Tenetur quia eos. Autem tempore quibusdam vel
                  necessitatibus optio ad corporis.
                </p>
                <div className="text-center">
                  <a href="#" className="more-btn">
                    <span>Learn More</span> <i className="bi bi-chevron-right" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Why Box */}

            {/* Features Section */}
            <div className="col-lg-8 d-flex align-items-stretch">
              <div className="row gy-4" data-aos="fade-up" data-aos-delay={200}>
                {/* Icon Box 1 */}
                <div className="col-xl-4">
                  <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                    <i className="bi bi-clipboard-data" />
                    <h4>Corporis voluptates officia eiusmod</h4>
                    <p>
                      Consequuntur sunt aut quasi enim aliquam quae harum
                      pariatur laboris nisi ut aliquip
                    </p>
                  </div>
                </div>
                {/* End Icon Box 1 */}

                {/* Icon Box 2 */}
                <div className="col-xl-4" data-aos="fade-up" data-aos-delay={300}>
                  <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                    <i className="bi bi-gem" />
                    <h4>Ullamco laboris ladore pan</h4>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt
                    </p>
                  </div>
                </div>
                {/* End Icon Box 2 */}

                {/* Icon Box 3 */}
                <div className="col-xl-4" data-aos="fade-up" data-aos-delay={400}>
                  <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                    <i className="bi bi-inboxes" />
                    <h4>Labore consequatur incidid dolore</h4>
                    <p>
                      Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                      maiores omnis facere
                    </p>
                  </div>
                </div>
                {/* End Icon Box 3 */}
              </div>
            </div>
            {/* End Features Section */}
          </div>
        </div>
      </section>
      {/* /Why Us Section */}
    </>
  );
};

export default WhyUs;
