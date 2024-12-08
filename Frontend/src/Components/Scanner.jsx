import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../assets/img/scanner.png";

const Scanner = () => {
    useEffect(() => {
        // Initialize AOS animations
        AOS.init();
    
  }, []);

  return (
    <section id="scanner" className="scanner-section">
      <div className="container">
        <div className="scanner-content">
          <div
            className="scanner-header"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2>Scan to Pay</h2>
            <p>Use your mobile to scan the QR code and complete the payment.</p>
          </div>

          <div
            className="scanner-wrapper"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="scanner-box">
              <div className="scanner-screen" data-aos="zoom-in" data-aos-delay="300">
                {/* You can replace this with an actual scanning library or use a placeholder image for now */}
                <img src={img} alt="Scanner" className="scanner-image" />
              </div>
              <div className="scanner-footer" data-aos="fade-up" data-aos-delay="400">
                <div className="scan-instructions">
                  <p>9391004888m@pnb</p>
                  <p>MERCHANT: IMA  AMS TELANGANA</p>
                </div>
                <div className="scan-footer-img">
                  {/* Add any footer image or logo if needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scanner;
