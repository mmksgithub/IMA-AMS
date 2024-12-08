import React, { useEffect } from "react";
import 'aos/dist/aos.css';

import dr1 from "../assets/img/members/Dr.R.V Asokan.jpg"
import dr2 from "../assets/img/members/Dr.Sharrad.jpg"
import dr3 from "../assets/img/members/Dr.sahajanand.jpeg"
import dr4 from "../assets/img/members/DR.Anilkumar.jpg"
import dr5 from "../assets/img/members/Dr.shitij.jpg"
import dr6 from "../assets/img/members/Dr.Nomeeta.jpg"
import dr7 from "../assets/img/members/Dr.Pankaj.jpg"
import dr8 from "../assets/img/members/Dr.Nibedita.jpg"
import dr9 from "../assets/img/members/Dr.Srirang.jpg"
import dr10 from "../assets/img/members/Dr.Shekar.jpg"
import dr11 from "../assets/img/members/Dr.Hiren.jpg"
import dr12 from "../assets/img/members/Dr.Rajeev.jpg"
import dr13 from "../assets/img/members/Dr.Shilpa.jpg"
import dr14 from "../assets/img/members/Dr.Rajiv.jpg"

const Trainers = () => {
  return (
    <section id="trainers" className="section trainers">
      <div className="container">
        <div className="row gy-5">

          {/* Trainer 1 */}
          <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="100">
            <div className="member-img">
              <img src={dr1} className="img-fluid" alt="Walter White" />
              <div className="social">
                <a href="#"><i className="bi bi-twitter-x"></i></a>
                <a href="#"><i className="bi bi-facebook"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
                <a href="#"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info text-center">
              <h4>Walter White</h4>
              <span>Business</span>
              <p>Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow</p>
            </div>
          </div>

          {/* Trainer 2 */}
          <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="200">
            <div className="member-img">
              <img src={dr2} className="img-fluid" alt="Sarah Jhonson" />
              <div className="social">
                <a href="#"><i className="bi bi-twitter-x"></i></a>
                <a href="#"><i className="bi bi-facebook"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
                <a href="#"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info text-center">
              <h4>Sarah Jhonson</h4>
              <span>Marketing</span>
              <p>Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem ut</p>
            </div>
          </div>

          {/* Trainer 3 */}
          <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="300">
            <div className="member-img">
              <img src={dr3} className="img-fluid" alt="William Anderson" />
              <div className="social">
                <a href="#"><i className="bi bi-twitter-x"></i></a>
                <a href="#"><i className="bi bi-facebook"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
                <a href="#"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info text-center">
              <h4>William Anderson</h4>
              <span>Maths</span>
              <p>Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed facilis at qui</p>
            </div>
          </div>

          {/* Trainer 4 */}
          <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="400">
            <div className="member-img">
              <img src={dr4} className="img-fluid" alt="Amanda Jepson" />
              <div className="social">
                <a href="#"><i className="bi bi-twitter-x"></i></a>
                <a href="#"><i className="bi bi-facebook"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
                <a href="#"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info text-center">
              <h4>Amanda Jepson</h4>
              <span>Foreign Languages</span>
              <p>Magni voluptatem accusamus assumenda cum nisi aut qui dolorem voluptate sed et veniam quasi quam consectetur</p>
            </div>
          </div>

          {/* Trainer 5 */}
          <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="500">
            <div className="member-img">
              <img src={dr5} className="img-fluid" alt="Brian Doe" />
              <div className="social">
                <a href="#"><i className="bi bi-twitter-x"></i></a>
                <a href="#"><i className="bi bi-facebook"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
                <a href="#"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info text-center">
              <h4>Brian Doe</h4>
              <span>Web Development</span>
              <p>Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit</p>
            </div>
          </div>

          {/* Trainer 6 */}
          <div className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="600">
            <div className="member-img">
              <img src={dr6} className="img-fluid" alt="Josepha Palas" />
              <div className="social">
                <a href="#"><i className="bi bi-twitter-x"></i></a>
                <a href="#"><i className="bi bi-facebook"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
                <a href="#"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="member-info text-center">
              <h4>Josepha Palas</h4>
              <span>Business</span>
              <p>Sint sint eveniet explicabo amet consequatur nesciunt error enim rerum earum et omnis fugit eligendi cupiditate vel</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Trainers;
