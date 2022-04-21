import React, { useEffect, useState } from "react";

import {
  AccountCircleTwoTone,
  FmdGoodOutlined,
  FavoriteOutlined,
  ModeCommentOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";
// import  from "@mui/icons-material/LocationOnTwoTone";
// import  from '@mui/icons-material/NavigateNextOutlined';
import Carousel from "react-material-ui-carousel";

import "./PostCard.css";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateLikes } from "../../slices/postSlice";

function PostCard({ post }) {
  const {
    username,
    first_name,
    last_name,
    location,
    tags,
    text,
    images,
    likes,
    date,
    user,
    _id,
  } = post;

  const timestamp = new Date(date);

  const dispatch = useDispatch();

  const loggedInUser = useSelector((state) => state.auth.user);
  const isLiked = likes.some((like) => loggedInUser?._id === like.user);

  return (
    <div className="post-card">
      <div className="post-card__title">
        <div className="profile-pic">
          <img src="https://picsum.photos/200/300" alt="Profile Pic" />
          {/* <AccountCircleTwoTone sx={{ fontSize: "4.5rem", color: "#4d4d4d" }} /> */}
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
        <Carousel
          className="post-card__images"
          autoPlay={false}
          animation={"slide"}
          navButtonsAlwaysVisible={true}
          cycleNavigation={false}
          indicatorContainerProps={{
            style: {
              position: "absolute",
              bottom: "10px",
              zIndex: 2, // 5
            },
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
            <NavLink to={`/posts/${_id}`} key={index}>
              <img src={image} alt="Post Images" />
            </NavLink>
          ))}
        </Carousel>
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
            Arjit and 63 others
          </span>

          <span>
            <NavLink to={`/posts/${_id}`}>
              <ModeCommentOutlined
                sx={{ fontSize: "1.85rem", marginRight: "0.1rem" }}
              />
              {post.comments.length} comments
            </NavLink>
          </span>
        </div>
      </div>

      <div className="post-card__actions">
        <span className="action-items">
          {isLiked ? (
            <FavoriteOutlined
              onClick={() => dispatch(updateLikes(_id))}
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
              onClick={() => dispatch(updateLikes(_id))}
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
