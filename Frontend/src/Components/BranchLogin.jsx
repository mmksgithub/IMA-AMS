import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/img/ima-ams-logo.jpg"; // Replace with your logo path

const BranchLogin = () => {
  return (
    <div className="hq-login-page">
      <div className="hq-login-container">
        <div className="hq-login-card" data-aos="fade-up">
          {/* Logo */}
          <img src={logo} alt="IMA-AMS Logo" className="hq-login-logo" />

          {/* Title */}
          <h2 className="hq-login-title">Welcome to IMA-AMS - Branch Login</h2>

          {/* Login Form */}
          <form className="hq-login-form">
            <div className="hq-form-group">
              <input
                type="text"
                className="form-control hq-input"
                id="hq-username"
                placeholder="User Name"
              />
            </div>
            <div className="hq-form-group">
              <input
                type="password"
                className="form-control hq-input"
                id="hq-password"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block hq-login-button">
              Login
            </button>
            <div className="hq-forgot-password-container">
              <a href="#" className="hq-forgot-password">
                Forgot password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BranchLogin;
