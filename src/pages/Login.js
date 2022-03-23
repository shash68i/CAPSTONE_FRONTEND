import React from "react";
import { Link } from "react-router-dom";

import FormImage from "../assets/images/form_image.jpg";
import "./LoginSignup.css";

function Login() {
  return (
    <div className="auth-container">
      <div className="auth-image-section">
        <img src={FormImage} alt="Login Form" />
      </div>
      <div className="form-section">
        <form className="form-fields" action="">
          <div className="form-heading">Log In</div>
          <input type="email" id="email" name="email" placeholder="Email" />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />

          <button className="auth-button">Log In</button>
          <div className="auth-footer">
            Don't have an account? <span> <Link to='/register'>Register</Link></span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
