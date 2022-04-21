import React, { useEffect } from "react";
import { NavLink,  useNavigate} from "react-router-dom";

import PostCard from "../components/PostCard/PostCard";
import Suggestion from "../components/Suggestion/Suggestion";

import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import { getMyPosts, getMyProfile, updateMyProfile } from "../slices/userSlice";

import "./EditProfile.css";

const editProfileSchema = Yup.object().shape({
  // email: Yup.string().email().required("Required!"),
  // location: Yup.string().required("Required!"),
  address: Yup.string().required("Required!"),
  bio: Yup.string(),
  profile_pic: Yup.string()
    // .matches(
    //   "/.(jpg|jpeg|png|webp|avif|gif|svg)$/",
    //   "Please enter a valid image Url"
    // )
    .required("Required!"),
  twitter: Yup.string(),
  facebook: Yup.string(),
  instagram: Yup.string(),
});

export default function EditProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profile = useSelector((state) => state.user.myProfile);
  const user = useSelector((state) => state.auth.user);


  const initialValues = {
    email: profile?.email || "",
    location: profile?.email || "",
    bio: profile?.bio || "",
    profile_pic: profile?.profile_pic || "",
    address: profile?.address || "",
    twitter: profile?.twitter|| "",
    facebook: profile?.facebook || "",
    instagram: profile?.instagram || "",
  };

  useEffect(() => {
    dispatch(getMyProfile());
  }, []);

  const handleEditProfile = (values, { setSubmitting }) => {
    console.log(values, "values")
    dispatch(updateMyProfile(values));
    navigate("/profile");
  };

  console.log(profile, "profile");

  return (
    user &&
    profile && (
      <div className="edit-profile-container">
        <div className="edit-profile-card">
          <div className="edit-profile__pic">
            <img src={profile?.profile_pic} alt="Profile Pic" />
          </div>

          <span className="profile__name">
            {user.first_name} {user.lastName}
          </span>
          <span className="profile__username">@shash68i </span>

          <div className="edit-profile-section">
            <Formik
              initialValues={initialValues}
              validationSchema={editProfileSchema}
              enableReinitialize={true}
              validateOnBlur={false}
              onSubmit={handleEditProfile}
            >
              <Form className="edit-form-fields">
                <div className="edit-form-heading">Edit Profile</div>

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
                  <ErrorMessage component="div" name="address" />
                </div>

                <div className="edit-group">
                  <Field type="text" id="bio" name="bio" placeholder="Bio" />
                </div>

                <div className="edit-group">
                  <Field
                    type="text"
                    id="profile_pic"
                    name="profile_pic"
                    placeholder="Profile Pic URL"
                  />
                  <ErrorMessage component="div" name="profile_pic" />
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
    )
  );
}
