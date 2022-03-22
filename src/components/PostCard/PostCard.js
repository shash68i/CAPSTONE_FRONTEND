import React from "react";

import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";

import "./PostCard.css";

function PostCard() {
  return (
    <div className="post-card">
      <div className="post-card__title">
        <div className="profile-pic">
          {/* <img src="" alt="Profile Pic" /> */}
          <AccountCircleTwoToneIcon
            sx={{ fontSize: "2.8rem", color: "#4d4d4d" }}
          />
        </div>

        <div className="user-info__group">
          <div className="user-details">
            <span className="Name">
              <strong>Shashank Kumar</strong>{" "}
            </span>
            <span className="username">@shash68i </span>
            <span className="timestamp">28 Jan</span>
          </div>
          <div className="user-location">
            <LocationOnTwoToneIcon
              sx={{ fontSize: "1.3rem", color: "#ea4335" }}
            />
            Location
          </div>
        </div>
      </div>

      <div className="post-card__images"></div>

      <div className="post-card__text"></div>

      <div className="post-card__actions"></div>
    </div>
  );
}

export default PostCard;
