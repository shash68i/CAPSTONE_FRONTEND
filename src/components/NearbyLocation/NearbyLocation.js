import React, { Fragment } from "react";

import { FmdGoodOutlined } from "@mui/icons-material";

import "./NearbyLocation.css";
import { useDispatch, useSelector } from "react-redux";
import {postActions} from "../../slices/postSlice";


export default function NearbyLocation({locationOptions}) {
  const dispatch = useDispatch();

  return (
    <Fragment>
      <div className="nearby-location__card">
        <div className="nearby-location__title">Nearby Locations</div>

        <div className="nearby-location__items">
          {locationOptions.map((location, index) => (
            <span className="nearby-location__item" key={index} onClick={() => dispatch(postActions.filterPostsByLocation(location))}>
              <FmdGoodOutlined
                sx={{
                  fontSize: "2rem",
                  marginRight: "0.2rem",
                  color: "#ed4956",
                }}
              />
              <p>{location}</p>
            </span>
          ))}
        </div>
      </div>
    </Fragment>
  );
}
