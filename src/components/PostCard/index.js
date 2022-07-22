import React, { useEffect, useState } from "react";

import {
  FmdGoodOutlined,
  FavoriteOutlined,
  ModeCommentOutlined,
  FavoriteBorderOutlined,
  AccountCircleOutlined,
} from "@mui/icons-material";
// import  from "@mui/icons-material/LocationOnTwoTone";
// import  from '@mui/icons-material/NavigateNextOutlined';
import Carousel from "react-elastic-carousel";

import "./PostCard.css";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  postActions,
  updateLikes,
  updateMyLikes,
} from "../../core/slices/postSlice";
import { updateUserLikes } from "../../core/slices/userSlice";

function PostCard({ post, type }) {
  const {
    username,
    first_name,
    last_name,
    location,
    tags,
    text,
    images,
    profile_pic,
    likes,
    date,
    user,
    _id,
  } = post;

  const timestamp = new Date(date);

  const dispatch = useDispatch();

  const loggedInUser = useSelector((state) => state.auth.user);
  const [isLiked, setIsLiked] = useState(
    likes.some((like) => loggedInUser?._id === like.user)
  );
  const [likesCount, setLikesCount] = useState(likes.length);

  const handleUpdateLikes = () => {
    if (isLiked) {
      setIsLiked(false);
      setLikesCount(likesCount - 1);
    } else {
      setIsLiked(true);
      setLikesCount(likesCount + 1);
    }
    if (type === "My Posts") {
      dispatch(updateMyLikes(_id));
    } else if (type === "User Posts") {
      dispatch(updateUserLikes(_id));
    } else {
      dispatch(updateLikes(_id));
    }
  };

  return (
    <div className="post-card">
      <div className="post-card__title">
        <div className="profile-pic">
          {profile_pic ? (
            <img src={profile_pic} alt="Profile Pic" />
          ) : (
            <AccountCircleOutlined
              sx={{ fontSize: "4.5rem", color: "#4d4d4d" }}
            />
          )}
        </div>

        <div className="user-info__group">
          <div className="user-location">
            <FmdGoodOutlined
              sx={{
                fontSize: "1.7rem",
                marginRight: "0.2rem",
                color: "#ea4335",
              }}
            />{" "}
            {location}
          </div>
          <div className="user-details">
            <Link
              to={`/users/${user}`}
              state={{ first_name, last_name, username }}
            >
              <span className="name">
                <strong>
                  {first_name} {last_name}
                </strong>{" "}
              </span>
            </Link>
            <span className="username">@{username} </span>
            <span className="timestamp">{timestamp.toDateString()}</span>
          </div>
        </div>
      </div>

      <div>
        <Carousel itemsToShow={1}>
          {images.map((image, index) => (
            <NavLink to={`/posts/${_id}`} key={`image-${index + 1}`}>
              <img src={image} alt="Post Images" />
            </NavLink>
          ))}
        </Carousel>
        {/* <Carousel
          className="post-card__images"
          autoPlay={false}
          animation={"slide"}
          navButtonsAlwaysVisible={true}
          cycleNavigation={true}
          changeOnFirstRender={true}
          indicatorContainerProps={{
            style: {
              position: "absolute",
              bottom: "10px",
              zIndex: 2, // 5
            },
          }}
          NavButton={({ onClick, className, style, next, prev }) => {
            // Other logic

            return (
              <button onClick={onClick} className={className} style={style}>
                {prev && "Previous"}
                {next && "Next"}
              </button>
            );
          }}
          navButtonsProps={{
            style: {
              background:
                "linear-gradient(to right bottom, rgba(255, 255, 255, 0.823), rgba(255, 255, 255, 0.484))",
              backdropFilter: "blur(10px)",
              color: "black",
              "&:hover": {
                "& $button": {
                  backgroundColor: "black",
                  filter: "brightness(120%)",
                  opacity: "0.4",
                },
              },
            },
          }}
        >
          {images.map((image, index) => (
            <NavLink to={`/posts/${_id}`} key={`image-${index+1}`}>
              <img src={image} alt="Post Images" />
            </NavLink>
          ))}
        </Carousel> */}
        {/* <Carousel animation={"slide"} autoPlay={false}>
          {images.map((image, index) => (
            <div className="imageWrapper">
              <NavLink to={`/posts/${_id}`} key={index}>
                <img src={image} alt="Post Images" />
              </NavLink>
            </div>
          ))}
        </Carousel> */}
      </div>

      <div className="post-card__text">
        {text}
        <div className="post-card__actions-info">
          <span>
            <FavoriteOutlined
              sx={{
                fontSize: "1.85rem",
                marginRight: "0.1rem",
                color: "#ed4956",
              }}
            />
            {likesCount}{" "}
            {likesCount === 0 || likesCount === 1 ? "like" : "likes"}
          </span>

          <span>
            <NavLink className="comment" to={`/posts/${_id}`}>
              <ModeCommentOutlined
                sx={{ fontSize: "1.85rem", marginRight: "0.3rem" }}
              />
              {post.comments.length}{" "}
              {post.comments.length === 0 || post.comments.length === 1
                ? "comment"
                : "comments"}
            </NavLink>
          </span>
        </div>
      </div>

      <div className="post-card__actions">
        <span className="action-items">
          {isLiked ? (
            <FavoriteOutlined
              onClick={handleUpdateLikes}
              sx={{
                width: "2em",
                cursor: "pointer",
                fontSize: "2.7rem",
                margin: "1rem",
                padding: "0 1rem",
                color: "#ed4956",
              }}
            />
          ) : (
            <FavoriteBorderOutlined
              onClick={handleUpdateLikes}
              sx={{
                width: "2em",
                cursor: "pointer",
                fontSize: "2.7rem",
                margin: "1rem",
                padding: "0 1rem",
              }}
            />
          )}
        </span>
        <span className="action-items">
          <NavLink to={`/posts/${_id}`}>
            <ModeCommentOutlined
              sx={{
                width: "2em",
                cursor: "pointer",
                fontSize: "2.4rem",
                margin: "1rem",
                padding: "0 1rem",
                fontWeight: "400",
              }}
            />
          </NavLink>
        </span>
      </div>

      {/* <hr />
      <div className="post-card__comments">
        <input type="text" name="post-comment" placeholder="Post your comment" />
        <input type="submit" value="Post" />
      </div>
      <hr /> */}
    </div>
  );
}

export default PostCard;
