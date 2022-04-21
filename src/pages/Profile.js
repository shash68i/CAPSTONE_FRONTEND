import React, { useEffect } from "react";
import { NavLink, Navigate } from "react-router-dom";
import {
  EmailOutlined,
  FacebookOutlined,
  FmdGoodOutlined,
  Instagram,
  Twitter,
} from "@mui/icons-material";

import "./Profile.css";

import { useDispatch, useSelector } from "react-redux";
import { getMyPosts, getMyProfile} from "../slices/userSlice";

import PostCard from "../components/PostCard/PostCard";

export default function Profile() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);
  const profile = useSelector((state) => state.user.myProfile);
  const posts = useSelector((state) => state.user.myPosts);
  const loading = useSelector((state) => state.user.loading);

  

  useEffect(() => {
    if (user) {
      dispatch(getMyProfile());
      dispatch(getMyPosts(user));
    }
  }, []);

  useEffect(() => {
    if(profile=== null) {
      return <Navigate to="/create-profile" />
    }
    
  }, [profile])


  

  return profile && (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-card-left">
          <span className="profile-large-pic">
            <img src={profile.profile_pic} alt="Profile Pic" />
          </span>
        </div>

        <div className="profile-card-right">
          <span className="profile__name">{user.first_name} {user.last_name}</span>
          <span className="profile__username">@{user.username} </span>
          <span className="profile__socials">
            <EmailOutlined className="email" sx={{ fontSize: "2rem" }} />
            <FmdGoodOutlined className="address" sx={{ fontSize: "2rem" }} />
            <Twitter className="twitter" sx={{ fontSize: "2rem" }} />
            <FacebookOutlined className="facebook" sx={{ fontSize: "2rem" }} />
            <Instagram className="instagram" sx={{ fontSize: "2rem" }} />
          </span>

          <span className="profile__bio">
            <br />
            {profile.bio}
          </span>

          <NavLink to="/edit-profile" className="profile-edit">
            <button className="edit-profile-btn">Edit Profile</button>
          </NavLink>
        </div>
      </div>

      {posts.map((post) => <PostCard post={post} key={post._id}/>)}
    </div>
  );
}
