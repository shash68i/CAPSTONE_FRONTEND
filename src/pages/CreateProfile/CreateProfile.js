import React, { useState } from "react";
import { NavLink, Navigate } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";

import "./CreateProfile.css";
import { useDispatch, useSelector } from "react-redux";
import stateUtils from "./utils/stateUtils";

export default function CreateProfile() {
  const {
    user,
    profile,
    profileSchema,
    createProfileData,
    handleCreateProfile,
  } = stateUtils();

  if (profile !== null) {
    return <Navigate to="/profile" />;
  }

  return user === null ? null : (
    <div className="edit-profile-container">
      <div className="edit-profile-card">
        <div className="edit-profile__pic">
          <img src="https://picsum.photos/200/300" alt="Profile Pic" />
        </div>

        <span className="profile__name">
          {user.first_name} {user.last_name}
        </span>
        <span className="profile__username">{user.username} </span>

        <div className="edit-profile-section">
          <Formik
            initialValues={createProfileData}
            validationSchema={profileSchema}
            enableReinitialize={true}
            validateOnBlur={false}
            onSubmit={handleCreateProfile}
          >
            <Form className="edit-form-fields">
              <div className="edit-form-heading">Create Profile</div>

              {/* <div className="edit-group">
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                <ErrorMessage component="div" name="email" />

                <Field
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Location"
                />
                <ErrorMessage component="div" name="location" />
              </div> */}

              <div className="edit-group">
                <Field
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Address"
                />
                <ErrorMessage
                  className="error"
                  component="div"
                  name="address"
                />
              </div>

              <div className="edit-group">
                <Field type="textarea" rows={2} id="bio" name="bio" placeholder="Bio" />
              </div>

              <div className="edit-group">
                <Field
                  type="text"
                  id="profile_pic"
                  name="profile_pic"
                  placeholder="Profile Pic URL"
                />
                <ErrorMessage
                  className="error"
                  component="div"
                  name="profile_pic"
                />
              </div>

              <div className="edit-group">
                <Field
                  type="text"
                  id="facebook"
                  name="facebook"
                  placeholder="Facebook Profile URL"
                />
              </div>

              <div className="edit-group">
                <Field
                  type="text"
                  id="twitter"
                  name="twitter"
                  placeholder="Twitter Profile URL"
                />
              </div>

              <div className="edit-group">
                <Field
                  type="text"
                  id="instagram"
                  name="instagram"
                  placeholder="Instagram Profile URL"
                />
              </div>

              <div className="edit-group-btn">
                <NavLink to="/profile">
                  <button className="action-button cancel">Cancel</button>
                </NavLink>
                <button type="submit" className="action-button save">
                  Save
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
