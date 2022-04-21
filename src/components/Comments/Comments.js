import React, { Fragment, useState } from "react";

import {
  FavoriteBorderOutlined,
  ModeCommentOutlined,
  SendRounded,
} from "@mui/icons-material";

import Comment from "../Comment/Comment";

import "./Comments.css";
import { addComment } from "../../slices/postSlice";
import { useDispatch } from "react-redux";

const Comments = ({ comments, postId }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleAddComment = (e) => {
    e.preventDefault();
    const commentData = { text };
    dispatch(addComment({postId, commentData}));
    setText("");
  };

  return (
    <div className="comments-card">
      <form className="post-comment-form" onSubmit={handleAddComment}>
        <span className="profile-pic">
          <img src="https://picsum.photos/200/300" alt="Profile Pic" />
          {/* <AccountCircleTwoTone sx={{ fontSize: "4.5rem", color: "#4d4d4d" }} /> */}
        </span>
        <textarea
          className="post-comment-input"
          row="3"
          type="text"
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a comment..."
          value={text}
          required
        />
        <span className="post-comment-btn">
          <button style={{ border: "none", cursor: "pointer" }} type="submit">
            <SendRounded
              sx={{ fontSize: "2.4rem", margin: "0.4rem", fontWeight: "400" }}
            />
          </button>
        </span>
      </form>

      <div className="comments">
        <div className="comments__title">Comments</div>
        {comments.map((comment) => (
          <Comment postId={postId} comment={comment} key={comment._id} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
