import React from "react";
import { NavLink } from "react-router-dom";

import PostCard from "../components/PostCard/PostCard";
import Suggestion from "../components/Suggestion/Suggestion";

import "./EditProfile.css";

export default function EditProfile() {
  return (
    <div className="edit-profile-container">
      <div className="edit-profile-card">
        <div className="edit-profile__pic">
          <img src="https://picsum.photos/200/300" alt="Profile Pic" />
        </div>

        <span className="profile__name">Arjit Kaur Arora</span>
        <span className="profile__username">@shash68i </span>

        <div className="edit-profile-section">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="edit-form-fields"
          >
            <div className="edit-form-heading">EditProfile</div>
            <div className="edit-group">
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

            <div className="edit-group">
              <input type="email" id="email" name="email" placeholder="Email" />
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Location"
              />
            </div>

            <div className="edit-group">
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Address"
              />
            </div>

            <div className="edit-group">
              <input type="text" id="bio" name="bio" placeholder="Bio" />
            </div>

            <div className="edit-group">
              <input
                type="text"
                id="profile-pic"
                name="profile-pic"
                placeholder="Profile Pic URL"
              />
            </div>

            <div className="edit-group">
              <input
                type="text"
                id="profile-pic"
                name="profile-pic"
                placeholder="Facebook Profile URL"
              />
            </div>

            <div className="edit-group">
              <input
                type="text"
                id="profile-pic"
                name="profile-pic"
                placeholder="Twitter Profile URL"
              />
            </div>

            <div className="edit-group">
              <input
                type="text"
                id="profile-pic"
                name="profile-pic"
                placeholder="Instagram Profile URL"
              />
            </div>

            <div className="edit-group-btn">
              <NavLink to="/profile">
                <button className="action-button cancel">Cancel</button>
              </NavLink>
              <button className="action-button save">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
