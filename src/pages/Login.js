import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import FormImage from "../assets/images/form_image.jpg";
import { authActions } from "../slices/authSlice";
import "./LoginSignup.css";

function Login() {
  const dispatch = useDispatch(); // For dispatching the actions
  const navigate = useNavigate(); // React Router v6-> Navigate Hook

  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!isAuth) {
      dispatch(authActions.login());
    }
  };

  if (isAuth) {
    navigate('/');
  }

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

          <button className="auth-button" onClick={handleLogin}>
            Log In
          </button>
          <div className="auth-footer">
            Don't have an account?{" "}
            <span>
              {" "}
              <NavLink to="/register">Register</NavLink>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
