import React from "react";
import { NavLink } from "react-router-dom";
import {
  EmailOutlined,
  FacebookOutlined,
  FmdGoodOutlined,
  Instagram,
  Twitter,
} from "@mui/icons-material";

import "./Profile.css";

import PostCard from "../components/PostCard/PostCard";

const Profile = () => {
  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-card-left">
          <span className="profile-large-pic">
            <img src="https://picsum.photos/200/300" alt="Profile Pic" />
          </span>
        </div>

        <div className="profile-card-right">
          <span className="profile__name">Arjit Kaur Arora</span>
          <span className="profile__username">@shash68i </span>
          <span className="profile__socials">
            <EmailOutlined className="email" sx={{ fontSize: "2rem"}} />
            <FmdGoodOutlined className="address" sx= {{ fontSize: "2rem"}} />
            <Twitter className="twitter" sx={{ fontSize: "2rem"}} />
            <FacebookOutlined className="facebook" sx={{ fontSize: "2rem"}} />
            <Instagram className="instagram" sx={{ fontSize: "2rem"}} />
          </span>

          <span className="profile__bio">
            <br />
            UI/UX Developer lorem ipsum dator
            <br />
            Love To travel
            <br />
            Travel Guide
            <br />
            Book for Rs. 500
          </span>

          <NavLink to="/edit-profile" className="profile-edit"><button className="edit-profile-btn">Edit Profile</button></NavLink>
        </div>

        {/* <div className="comment__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. In metus
          vulputate eu scelerisque. <br />
          Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Neque
          ornare aenean euismod elementum nisi. Sollicitudin tempor id eu nisl
          nunc mi. Nibh mauris cursus mattis molestie a.
        </div> */}
      </div>

      <PostCard />
    </div>
  );
};

export default Profile;
