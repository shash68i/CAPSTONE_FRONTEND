import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";

import FormImage from "../assets/images/form_image.jpg";
import { authActions, loadUser, loginUser } from "../slices/authSlice";
import "./LoginSignup.css";

const initialValues = {
  email: "",
  password: "",
};

const loginSchema = Yup.object({
  email: Yup.string()
    .email("Must be a valid mail")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password too short")
    .required("Password is Required!"),
});

function Login() {
  const dispatch = useDispatch(); // For dispatching the actions

  const [loginData, setLoginData] = useState(initialValues);

  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const token = useSelector((state) => state.auth.token);

  const handleLogin = (values, { setSubmitting }) => {
    setSubmitting(false);
    console.log("Submitted Details", loginData);
    dispatch(loginUser(JSON.stringify(values)));
    dispatch(loadUser());

    console.log();
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className="auth-container">
      <div className="auth-image-section">
        <img src={FormImage} alt="Login Form" />
      </div>
      <div className="form-section">
        <Formik
          initialValues={loginData}
          validationSchema={loginSchema}
          enableReinitialize={true}
          onSubmit={handleLogin}
        >
          <Form className="form-fields">
            <div className="form-heading">Log In</div>
            <div className="form-field">
              <Field type="email" id="email" name="email" placeholder="Email" />
              <ErrorMessage component="div" name="email" />
            </div>
            <div className="form-field">
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
              <ErrorMessage component="div" name="password" />
            </div>

            <button type="submit" className="auth-button">
              Log In
            </button>
            <div className="auth-footer">
              Don't have an account?{" "}
              <span>
                {" "}
                <NavLink to="/register">Register</NavLink>
              </span>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Login;
