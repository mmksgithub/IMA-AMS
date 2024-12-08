import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import images
import Course1Img from "../assets/img/course-1.jpg";
import Course2Img from "../assets/img/course-2.jpg";
import Course3Img from "../assets/img/course-3.jpg";
import Trainer1Img from "../assets/img/trainers/trainer-1-2.jpg";
import Trainer2Img from "../assets/img/trainers/trainer-2-2.jpg";
import Trainer3Img from "../assets/img/trainers/trainer-3-2.jpg";

const Courses = () => {
  useEffect(() => {
    // Initialize AOS animations
    AOS.init();
  }, []);

  return (
    <>
      {/* Courses Section */}
      <section id="courses" className="courses section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Courses</h2>
          <p>Popular Courses</p>
        </div>
        {/* End Section Title */}
        <div className="container">
          <div className="row">
            {coursesData.map((course, index) => (
              <div
                key={index}
                className={`col-lg-4 col-md-6 d-flex align-items-stretch ${
                  index > 1 ? "mt-4 mt-md-0" : ""
                }`}
                data-aos="zoom-in"
                data-aos-delay={course.delay}
              >
                <div className="course-item">
                  <img src={course.image} className="img-fluid" alt={course.alt} />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <p className="category">{course.category}</p>
                      <p className="price">{course.price}</p>
                    </div>
                    <h3>
                      <a href="course-details.html">{course.title}</a>
                    </h3>
                    <p className="description">{course.description}</p>
                    <div className="trainer d-flex justify-content-between align-items-center">
                      <div className="trainer-profile d-flex align-items-center">
                        <img
                          src={course.trainerImage}
                          className="img-fluid"
                          alt={course.trainerName}
                        />
                        <a href="#" className="trainer-link">
                          {course.trainerName}
                        </a>
                      </div>
                      <div className="trainer-rank d-flex align-items-center">
                        <i className="bi bi-person user-icon" />
                        &nbsp;{course.students} &nbsp;&nbsp;
                        <i className="bi bi-heart heart-icon" />
                        &nbsp;{course.likes}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* /Courses Section */}
    </>
  );
};

// Course data for dynamic rendering
const coursesData = [
  {
    image: Course1Img,
    alt: "Course 1",
    category: "Web Development",
    price: "$169",
    title: "Website Design",
    description: "Et architecto provident deleniti facere repellat nobis iste.",
    trainerImage: Trainer1Img,
    trainerName: "Antonio",
    students: 50,
    likes: 65,
    delay: 100,
  },
  {
    image: Course2Img,
    alt: "Course 2",
    category: "Marketing",
    price: "$250",
    title: "Search Engine Optimization",
    description: "Id facere quia quae dolores dolorem tempore.",
    trainerImage: Trainer2Img,
    trainerName: "Lana",
    students: 35,
    likes: 42,
    delay: 200,
  },
  {
    image: Course3Img,
    alt: "Course 3",
    category: "Content",
    price: "$180",
    title: "Copywriting",
    description: "Aut suscipit aut cum nemo deleniti aut omnis.",
    trainerImage: Trainer3Img,
    trainerName: "Brandon",
    students: 20,
    likes: 85,
    delay: 300,
  },
];

export default Courses;
