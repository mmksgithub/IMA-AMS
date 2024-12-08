import PureCounter from "@srexi/purecounterjs"; // Default export
import React, { useEffect } from "react";

const CountSection = () => {
  useEffect(() => {
    // Initialize PureCounter when component mounts
    new PureCounter(); 
  }, []); // Dependency array ensures it runs only once

  return (
    <>
      {/* Counts Section */}
      <section id="counts" className="section counts light-background">
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={3500}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Members</p>
              </div>
            </div>
            {/* End Stats Item */}
            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={29}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>States</p>
              </div>
            </div>
            {/* End Stats Item */}
            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={42}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Branches</p>
              </div>
            </div>
            {/* End Stats Item */}
            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={24}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Trainers</p>
              </div>
            </div>
            {/* End Stats Item */}
          </div>
        </div>
      </section>
      {/* /Counts Section */}
    </>
  );
};

export default CountSection;
