import React from "react";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="header">
      <div className="navbar">
        <div className="logo">Koya</div>
        <input
          className="search"
          type="text"
          placeholder="Search (Location/Tags)"
        />
        <div className="nav-side">
          <div className="profile">
            <PermIdentityRoundedIcon
              sx={{ fontSize: "3rem", color: "#4d4d4d" }}
            />
          </div>
          <div className="sign-out">
            <LogoutRoundedIcon sx={{ fontSize: "2.8rem", color: "#4d4d4d" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
