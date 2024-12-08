import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import "bootstrap/dist/css/bootstrap.min.css";
import headquartersImg from "../assets/img/ima-ams-logo.jpg"; 
import stateImg from "../assets/img/ima-ams-logo.jpg";
import branchImg from "../assets/img/ima-ams-logo.jpg";

const Login = () => {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div className="login-container">
      <div className="container">
        <div className="row justify-content-center">
          {/* Headquarters Login */}
          <div className="col-md-4">
            <div className="login-card" data-aos="fade-up" data-aos-delay="100">
              <img
                src={headquartersImg}
                alt="Headquarters"
                className="login-card-img"
              />
              <h3 className="login-card-title">IMA-AMS Headquarters Login</h3>
              <p className="login-card-text">
                Welcome to the admin portal for IMA-AMS Headquarters.
              </p>
              <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={() => navigate("/headquarter-login")}
              >
                Login
              </button>
            </div>
          </div>

          {/* State Login */}
          <div className="col-md-4">
            <div className="login-card" data-aos="fade-up" data-aos-delay="200">
              <img src={stateImg} alt="State" className="login-card-img" />
              <h3 className="login-card-title">IMA-AMS State Login</h3>
              <p className="login-card-text">
                Welcome to the admin portal for IMA-AMS State offices.
              </p>
              <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={() => navigate("/state-login")}
              >
                Login
              </button>
            </div>
          </div>

          {/* Branch Login */}
          <div className="col-md-4">
            <div className="login-card" data-aos="fade-up" data-aos-delay="300">
              <img src={branchImg} alt="Branch" className="login-card-img" />
              <h3 className="login-card-title">IMA-AMS Branch Login</h3>
              <p className="login-card-text">
                Welcome to the admin portal for IMA-AMS Branch offices.
              </p>
              <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={() => navigate("/branch-login")}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
