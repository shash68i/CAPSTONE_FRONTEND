import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";

import FormImage from "../assets/images/form_image.jpg";
import { authActions, loadUser, registerUser } from "../slices/authSlice";
import "./LoginSignup.css";

const initialValues = {
  first_name: "",
  last_name: "",
  username: "",
  email: "",
  password: "",
};

const signUpSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!"),
  last_name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!"),
  username: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .lowercase("Username must be in lowercase")
    .strict()
    .required("Required!"),
  email: Yup.string().email().required("Required!"),
  password: Yup.string().min(6, "Password too short").required("Required!"),
});

function Signup() {
  const dispatch = useDispatch();

  const [signUpData, setSignUpData] = useState(initialValues);

  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const handleRegister = (values, { setSubmitting }) => {
    dispatch(registerUser(values));
    dispatch(loadUser());
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className="auth-container">
      <div className="auth-image-section">
        <img src={FormImage} alt="SignUp Form" />
      </div>
      <div className="form-section">
        <Formik
          initialValues={signUpData}
          validationSchema={signUpSchema}
          enableReinitialize={true}
          onSubmit={handleRegister}
        >
          <Form className="form-fields">
            <div className="form-heading">Sign Up</div>
            <div className="fullname-group">
              <div className="form-field">
                <Field
                  type="text"
                  id="first_name"
                  name="first_name"
                  placeholder="First Name"
                  autoComplete="none"
                />
                <ErrorMessage component="div" name="first_name" />
              </div>

              <div className="form-field">
                <Field
                  type="text"
                  id="last_name"
                  name="last_name"
                  placeholder="Last Name"
                  autoComplete="none"
                />
                <ErrorMessage component="div" name="last_name" />
              </div>
            </div>
            <div className="form-field">
              <Field
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                autoComplete="none"
              />
              <ErrorMessage component="div" name="username" />
            </div>

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
              Create Account
            </button>
            <div className="auth-footer">
              Already have an account?{" "}
              <span>
                <Link to="/login">Login</Link>
              </span>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Signup;
