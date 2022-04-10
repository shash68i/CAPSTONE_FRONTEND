import React, { Fragment } from "react";

import { FmdGoodOutlined } from "@mui/icons-material";

import "./Suggestion.css";

export default function Suggestion() {
  return (
    <Fragment>
      <div className="suggest-location__card">
        <div className="suggest-location__title">Recommended Locations</div>

        <ul className="suggest-location__items">
          <li className="suggest-location__item">
            <FmdGoodOutlined
              sx={{ fontSize: "2rem", marginRight: "0.2rem", color: "#ed4956" }}
            />
            Ranchi, Jharkhand
          </li>
          <li className="suggest-location__item">
            <FmdGoodOutlined
              sx={{ fontSize: "2rem", marginRight: "0.2rem", color: "#ed4956" }}
            />
            Shimla, Himachal Pradesh
          </li>
          <li className="suggest-location__item">
            <FmdGoodOutlined
              sx={{ fontSize: "2rem", marginRight: "0.2rem", color: "#ed4956" }}
            />
            Bengaluru, Karnataka
          </li>
          <li className="suggest-location__item">
            <FmdGoodOutlined
              sx={{ fontSize: "2rem", marginRight: "0.2rem", color: "#ed4956" }}
            />
            Mathura, UP
          </li>
          <li className="suggest-location__item">
            <FmdGoodOutlined
              sx={{ fontSize: "2rem", marginRight: "0.2rem", color: "#ed4956" }}
            />
            Ranchi, Jharkhand
          </li>
          <li className="suggest-location__item">
            <FmdGoodOutlined
              sx={{ fontSize: "2rem", marginRight: "0.2rem", color: "#ed4956" }}
            />
            Ranchi, Jharkhand
          </li>
        </ul>
      </div>
    </Fragment>
  );
}
