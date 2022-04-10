import React from "react";
// import { NavLink } from "react-router-dom";
import CreatableSelect from "react-select/creatable";
import Select from "react-select";

import PostCard from "../components/PostCard/PostCard";
import Suggestion from "../components/Suggestion/Suggestion";

import "./CreatePost.css";

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

export default function AddPost({ handleClose }) {
  const handleChange = (newValue, actionMeta) => {
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
  };
  return (
    <div className="add-post-container">
      <div className="add-post-card">
        <div className="add-post-section">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="edit-form-fields"
          >
            <div className="edit-form-heading">Create Post</div>
            <div className="add-post-group">
              <textarea
                type="text"
                id="post-text"
                name="post-text"
                rows="8"
                placeholder="Type something here..."
                autoComplete="none"
              >
                Hi
              </textarea>
              {/* <input
                type="text"
                id="last-name"
                name="last-name"
                placeholder="Last Name"
                autoComplete="none"
              /> */}
            </div>

            <div className="add-post-group">
              <CreatableSelect
                styles={creatableCustomStyles}
                isMulti
                onChange={handleChange}
                placeholder="Add Tags #"
              />
            </div>

            <div className="edit-group">
              <input type="email" id="email" name="email" placeholder="Email" />
              <Select
                styles={selectCustomStyles}
                onChange={handleChange}
                placeholder="Location"
              />
            </div>

            <div className="add-post-group">
              <CreatableSelect
                styles={creatableCustomStyles}
                isMulti
                onChange={handleChange}
                placeholder="Add Images"
                components={{ DropdownIndicator: () => null }}
              />
            </div>

            {/* <div className="edit-group">
              <input
                type="text"
                id="image"
                name="image"
                placeholder="Image Url 1"
              />
            </div>
            <div className="edit-group">
              <input
                type="text"
                id="image"
                name="image"
                placeholder="Image Url 2"
              />
            </div>

            <div className="edit-group">
              <input type="text" id="image" name="image" placeholder="Image Url 3"
              />
            </div>

            <div className="edit-group">
              <input
                type="text"
                id="image"
                name="image"
                placeholder="Image Url 4"
              />
            </div>

            <div className="edit-group">
              <input type="text" id="bio" name="bio" placeholder="Bio" />
            </div> */}

            <div className="edit-group-btn">
                <button onClick={handleClose} className="action-button cancel">Cancel</button>
              <button className="action-button save">Post</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
