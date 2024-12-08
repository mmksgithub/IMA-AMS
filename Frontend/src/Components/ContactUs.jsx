import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  useEffect(() => {
    // Initialize AOS animations
    AOS.init();
  }, []);

  return (
    <section id="contact" className="contact section">
      {/* Google Map */}
      <div className="mt-5" data-aos="fade-up" data-aos-delay="200"></div>

      {/* Contact Info and Form */}
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {/* Contact Info */}
          <div className="col-lg-4">
            <div
              className="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Address</h3>
                <p>IMA AMS Hqrs #102, IMA Building 2nd Floor,</p><p>Esamia Bazar. Koti, Hyderabad, Telangana - 500 027</p>
              </div>
            </div>

            <div
              className="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <i className="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call Us</h3>
                <p>040 24740015 / 9177115272</p>
              </div>
            </div>

            <div
              className="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <i className="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Us</h3>
                <p>imaamshyd@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8">
            <form
              action="forms/contact.php"
              method="post"
              className="php-email-form"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="6"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-5" data-aos="fade-up" data-aos-delay="200">
      <iframe
           style={{ border: 0, width: "100%", height: "500px",marginBottom:"-50px" }}
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=IMA%20Telangana%20State,%20IMA%20Buliding,%201st%20floor,%20Esamia%20Bazar,%20Koti,%20Hyderabad,%20Telangana%20500027+(IMA%20AMS)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps devices</a>
          </iframe>
      </div>
    </section>
  );
};

export default ContactUs;
