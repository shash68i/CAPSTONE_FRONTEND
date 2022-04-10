import React, {Fragment} from "react";

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

function DetailPostCard() {
  return (
    <Fragment>
      <div className="detail-post-card">
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
              Ranchi Jharkhand
            </div>
            <div className="user-details">
              <span className="name">
                <strong>Shashank Kumar</strong>{" "}
              </span>
              <span className="username">@shash68i </span>
              <span className="timestamp">&#8226;28 Jan</span>
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
            <img src="https://picsum.photos/2080" alt="Post Images" />
            <img src="https://picsum.photos/2010" alt="Post Images" />
            <img src="https://picsum.photos/2000" alt="Post Images" />
            <img src="https://picsum.photos/2020" alt="Post Images" />
          </Carousel>
        </div>

        <div className="post-card__text">
          <strong>Shashank Kumar</strong> Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. In metus vulputate eu scelerisque.{" "}
          <br />
          <br />
          Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Neque
          ornare aenean euismod elementum nisi. Sollicitudin tempor id eu nisl
          nunc mi. Nibh mauris cursus mattis molestie a. Pellentesque pulvinar
          pellentesque habitant morbi. Adipiscing elit duis tristique
          sollicitudin nibh. Nibh nisl condimentum id venenatis a condimentum
          vitae sapien. Interdum varius sit amet mattis vulputate enim. In ante
          metus dictum at tempor.
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
              sx={{ fontSize: "2.4rem", margin: "1rem", fontWeight: "400" }}
            />
          </span>
        </div>

        {/* <hr />
        <div className="post-card__comments">
            <input type="text" name="post-comment" placeholder="Post your comment" />
            <input type="submit" value="Post" />
        </div>
        <hr /> */}
      </div>

      <Comments />
    </Fragment>
  );
}

export default DetailPostCard;
