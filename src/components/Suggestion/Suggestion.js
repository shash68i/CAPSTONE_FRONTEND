import React, { Fragment } from "react";

import { FmdGoodOutlined } from "@mui/icons-material";

import "./Suggestion.css";
import { useDispatch, useSelector } from "react-redux";
import {postActions} from "../../slices/postSlice";

// const suggest_locations = [
//   'Ranchi, Jharkhand',
//   'Shimla, Himachal Pradesh',
//   'Mathura, UP',
//   'New Delhi, UP'

// ]
export default function Suggestion({locationOptions}) {
  const dispatch = useDispatch();
  const filteredPosts = useSelector((state) => state.post.filteredPosts);

  return (
    <Fragment>
      <div className="suggest-location__card">
        <div className="suggest-location__title">Recommended Locations</div>

        <ul className="suggest-location__items">
          {locationOptions.map((location, index) => (
            <li className="suggest-location__item" key={index} onClick={() => dispatch(postActions.filterPostsByLocation(location))}>
              <FmdGoodOutlined
                sx={{
                  fontSize: "2rem",
                  marginRight: "0.2rem",
                  color: "#ed4956",
                }}
              />
              <p>{location}</p>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
}
