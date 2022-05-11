import React, { Fragment, useEffect } from "react";

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

import "../components/PostCard/PostCard.css";
import Comments from "../components/Comments/Comments";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../slices/postSlice";
import { NavLink } from "react-router-dom";
import Suggestion from "../components/Suggestion/Suggestion";
import { locationsGroup } from "../location";

import "./DetailPostCard.css";
import NearbyLocation from "../components/NearbyLocation/NearbyLocation";

function DetailPostCard() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const post = useSelector((state) => state.post.post);

  // const timestamp = new Date(post.date);
  const getNearbyLocations = () => {
    if (post._id) {
      return locationsGroup
        .find((locationGroup) => locationGroup.includes(post.location))
        ?.filter((location) => location !== post.location);
    }
  };

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  return (
    post && (
      <Fragment>
        <div className="detail-post-card">
          <div className="post-card__title">
            <div className="profile-pic">
              {post.profile_pic ? (
                <img src={post.profile_pic} alt="Profile Pic" />
              ) : (
                <AccountCircleTwoTone
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
                {post.location}
              </div>
              <div className="user-details">
                <NavLink
                  to={`/users/${post.user}`}
                  state={{
                    first_name: post.first_name,
                    last_name: post.last_name,
                    username: post.username,
                  }}
                >
                  <span className="name">
                    <strong>
                      {post.first_name} {post.last_name}
                    </strong>{" "}
                  </span>
                </NavLink>
                <NavLink
                  to={`/users/${post.user}`}
                  state={{
                    first_name: post.first_name,
                    last_name: post.last_name,
                    username: post.username,
                  }}
                >
                  <span className="username">@{post.username} </span>
                </NavLink>
                <span className="timestamp">
                  &#8226;{Date(post.date).slice(4, 15)}
                </span>
              </div>
            </div>
          </div>

          <div>
            <Carousel
              style={{ height: "40rem" }}
              className="detail-post-card__images"
              autoPlay={false}
              animation={"slide"}
              navButtonsAlwaysVisible={true}
              indicatorContainerProps={{
                style: {
                  position: "absolute",
                  bottom: "10px",
                  zIndex: 2, // 5
                },
              }}
              navButtonsProps={{
                style: {
                  backgroundColor: "#c0bdc2",
                  backdropFilter: "blur(5px)",
                  color: "black",
                },
              }}
            >
              {post.images.map((image, index) => (
                <img src={image} key={index} alt="Post Images" />
              ))}
            </Carousel>
          </div>

          <div className="post-card__text">
            <strong>Shashank Kumar</strong> {post.text}
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
                <ModeCommentOutlined
                  sx={{ fontSize: "1.85rem", marginRight: "0.1rem" }}
                />
                21 comments
              </span>
            </div>
          </div>

          <div className="post-card__actions">
            <span className="action-items">
              <FavoriteBorderOutlined
                sx={{ fontSize: "2.7rem", margin: "1rem" }}
              />
            </span>
            <span className="action-items">
              <ModeCommentOutlined
                sx={{
                  fontSize: "2.4rem",
                  margin: "1rem",
                  fontWeight: "400",
                }}
              />
            </span>
          </div>
        </div>

        <Comments comments={post.comments} postId={id} profile_pic={post.profile_pic} />
        <div className="nearby-location-section">
          <NearbyLocation locationOptions={getNearbyLocations()} />
        </div>
      </Fragment>
    )
  );
}

export default DetailPostCard;
