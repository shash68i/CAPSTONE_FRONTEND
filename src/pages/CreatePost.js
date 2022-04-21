import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import CreatableSelect from "react-select/creatable";
import Select from "react-select";

import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";

import PostCard from "../components/PostCard/PostCard";
import Suggestion from "../components/Suggestion/Suggestion";

import "./CreatePost.css";
import FormikSelect from "../components/FormikSelect";
import { addPost } from "../slices/postSlice";
import { useDispatch } from "react-redux";

const creatableCustomStyles = {
  container: (provided, state) => ({
    // none of react-select's styles are passed to <Control />
    ...provided,
    width: "100%",
    fontSize: "1.5rem",
    border: "none",
  }),
  control: (provided, state) => ({
    ...provided,
    border: "none",
    borderBottom: "1px solid hsl(0, 0%, 80%)",
  }),
  option: (provided, state) => ({
    ...provided,
    color: "black",
    fontSize: "1.5rem",
  }),

  singleValue: (provided, state) => ({
    ...provided,
  }),

  input: (provided, state) => ({
    ...provided,
  }),
  indicatorsContainer: (styles) => ({
    ...styles,
    paddingTop: 7,
    paddingBottom: 7,
  }),
};

const selectCustomStyles = {
  container: (provided, state) => ({
    // none of react-select's styles are passed to <Control />
    ...provided,
    width: "50%",
    fontSize: "1.5rem",
    border: "none",
  }),
  control: (provided, state) => ({
    ...provided,
    border: "none",
    borderBottom: "1px solid hsl(0, 0%, 80%)",
  }),
  option: (provided, state) => ({
    ...provided,
    color: "black",
    fontSize: "1.5rem",
  }),

  singleValue: (provided, state) => ({
    ...provided,
  }),

  input: (provided, state) => ({
    ...provided,
  }),
  indicatorsContainer: (styles) => ({
    ...styles,
    paddingTop: 7,
    paddingBottom: 7,
  }),
};

const initialValues = {
  text: "",
  location: "",
  images: [],
  tags: [],
};

const postSchema = Yup.object().shape({
  text: Yup.string()
    .min(10, "Too Short!")
    .max(500, "Too Long!")
    .required("Required!"),
  images: Yup.array().min(1, "Add atleast 2 pics").required("Required!"),
  location: Yup.string()
    .min(2, "Too Short!")
    .max(150, "Too Long!")
    .required("Required!"),
  tags: Yup.array().min(1, "Add atleast 2 tags"),
});

export default function AddPost({ handleClose }) {
  const dispatch = useDispatch();
  const [postData, setPostData] = useState(initialValues);

  const handleChange = () => {
    console.log("Submitted Details");

    console.log("action");
  };
  const handlePostSubmit = (values) => {
    setPostData(values);
    console.log("Submitted Details", postData);
    dispatch(addPost(values));
    handleClose();
    console.log("action");
  };

  return (
    <div className="add-post-container">
      <div className="add-post-card">
        <div className="add-post-section">
          <Formik
            initialValues={postData}
            validationSchema={postSchema}
            enableReinitialize={true}
            validateOnBlur={false}
            onSubmit={handlePostSubmit}

          >
            <Form className="add-post-fields">
              <div className="edit-form-heading">Create Post</div>
              <div className="add-post-group">
                <Field
                  id="text"
                  name="text"
                  placeholder="Type something here..."
                  autoComplete="none"
                >
                  {({ field, form, meta }) => {
                    return (
                      <textarea
                        rows="8"
                        name={field.name}
                        id={field.id}
                        value={field.value}
                        onChange={field.onChange}
                      />
                    );
                  }}
                </Field>
                <ErrorMessage component="div" name="text" />
              </div>

              <div className="add-post-group">
                <Field
                  name="tags"
                  placeholder="Add Tags #"
                  component={FormikSelect}
                />
                <ErrorMessage component="div" name="tags" />
              </div>

              <div className="edit-group">
                <Field
                  type="text"
                  name="location"
                  id="location"
                  placeholder="Location"
                />
                <ErrorMessage component="div" name="location" />
              </div>

              <div className="add-post-group">
                <Field
                  name="images"
                  components={{ DropdownIndicator: () => null }}
                  placeholder="Add Images"
                  component={FormikSelect}
                  extra="Hi"
                />
                <ErrorMessage component="div" name="images" />
              </div>

              <div className="edit-group-btn">
                <button onClick={handleClose} className="action-button cancel">
                  Cancel
                </button>
                <button type="submit" className="action-button save">
                  Post
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
