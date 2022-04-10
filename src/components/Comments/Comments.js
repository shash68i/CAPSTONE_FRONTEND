import React, { Fragment } from "react";

import {
  FavoriteBorderOutlined,
  ModeCommentOutlined,
  SendRounded,
} from "@mui/icons-material";

import Comment from "../Comment/Comment";

import "./Comments.css";

const Comments = () => {
  return (
    <div className="comments-card">
      <div className="post-comment">
        <span className="profile-pic">
          <img src="https://picsum.photos/200/300" alt="Profile Pic" />
          {/* <AccountCircleTwoTone sx={{ fontSize: "4.5rem", color: "#4d4d4d" }} /> */}
        </span>
        <input
          className="post-comment-input"
          type="text"
          placeholder="Add a comment..."
        />
        {/* <FavoriteBorderOutlined sx={{ fontSize: "2.7rem", margin: "1rem" }} /> */}
        <span className="post-comment-btn">
          <SendRounded
            sx={{ fontSize: "2.4rem", margin: "0.4rem", fontWeight: "400" }}
          />
        </span>
      </div>

      <div className="comments">
        <div className="comments__title">Comments</div>

        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
};

export default Comments;
