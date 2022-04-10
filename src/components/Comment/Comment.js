import React from "react";

import {
  FavoriteBorderOutlined,
  ModeCommentOutlined,
  SendRounded,
} from "@mui/icons-material";

import "./Comment.css";

const Comment = () => {
  return (
    <div className="comment-card">
      <div className="comment__title">
        <span className="comment__profile-pic">
          <img src="https://picsum.photos/200/300" alt="Profile Pic" />
        </span>
        <span className="comment__name">Arjit Kaur Arora</span>
        <span className="comment__username">@shash68i </span>
        <span className="comment__timestamp">&#8226;28 Jan</span>
      </div>

      <div className="comment__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. In metus vulputate
        eu scelerisque. <br />
        Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Neque
        ornare aenean euismod elementum nisi. Sollicitudin tempor id eu nisl
        nunc mi. Nibh mauris cursus mattis molestie a.
      </div>
    </div>
  );
};

export default Comment;
