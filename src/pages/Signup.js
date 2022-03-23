import React from "react";
import { Link } from "react-router-dom";

import FormImage from "../assets/images/form_image.jpg";
import "./LoginSignup.css";

function Signup() {
  return (
    <div className="auth-container">
      <div className="auth-image-section">
        <img src={FormImage} alt="SignUp Form" />
      </div>
      <div className="form-section">
        <form className="form-fields">
          <div className="form-heading">Sign Up</div>
          <div className="fullname-group">
            <input
              type="text"
              id="first-name"
              name="first-name"
              placeholder="First Name"
              autoComplete="none"
            />
            <input
              type="text"
              id="last-name"
              name="last-name"
              placeholder="Last Name"
              autoComplete="none"
            />
          </div>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            autoComplete="none"
          />
          <input type="email" id="email" name="email" placeholder="Email" />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />

          <button className="auth-button">Create Account</button>
          <div className="auth-footer">
            Already have an account?{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
