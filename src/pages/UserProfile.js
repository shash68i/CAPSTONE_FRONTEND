import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { useParams } from "react-router";

import {
  AccountCircleTwoTone,
  EmailOutlined,
  FacebookOutlined,
  FmdGoodOutlined,
  Instagram,
  Twitter,
} from "@mui/icons-material";

import "./Profile.css";

import { useDispatch, useSelector } from "react-redux";
import { getUserPosts, getUserProfile } from "../slices/userSlice";

import PostCard from "../components/PostCard/PostCard";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { state } = useLocation();
  const { first_name, last_name, username } = state;

  const profile = useSelector((state) => state.user.userProfile);
  const posts = useSelector((state) => state.user.userPosts);

  useEffect(() => {
    dispatch(getUserProfile(id));
    dispatch(getUserPosts(id));
  }, []);
  return (
    profile &&
    posts && (
      <div className="profile-page">
        <div className="profile-card">
          <div className="profile-card-left">
            <span className="profile-large-pic">
              {profile.profile_pic ? (
                <img src={profile.profile_pic} alt="Profile Pic" />
              ) : (
                <AccountCircleTwoTone
                  sx={{ fontSize: "4.5rem", color: "#4d4d4d" }}
                />
              )}
            </span>
          </div>

          <div className="profile-card-right">
            <span className="profile__name">
              {first_name} {last_name}
            </span>
            <span className="profile__username">@{username} </span>
            <span className="profile__socials">
              <EmailOutlined className="email" sx={{ fontSize: "2rem" }} />
              <FmdGoodOutlined className="address" sx={{ fontSize: "2rem" }} />
              <Twitter className="twitter" sx={{ fontSize: "2rem" }} />
              <FacebookOutlined
                className="facebook"
                sx={{ fontSize: "2rem" }}
              />
              <Instagram className="instagram" sx={{ fontSize: "2rem" }} />
            </span>

            <span className="profile__bio">
              <br />
              {profile.bio}
            </span>
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

        {posts.length > 0 &&
          posts.map((post) => (
            <PostCard post={post} key={post._id} type="User Posts" />
          ))}
      </div>
    )
  );
};

export default UserProfile;
