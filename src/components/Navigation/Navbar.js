import React, { useState } from "react";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Dialog, DialogTitle, Paper } from "@mui/material";
import CreatePost from "../../pages/CreatePost";
import { useDispatch } from "react-redux";
import { authActions } from "../../slices/authSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="header">
      <div className="navbar container">
        <NavLink to="/">
          {" "}
          <span className="logo">Koya</span>
        </NavLink>
        <input
          className="search"
          type="text"
          placeholder="Search (Location/Tags)"
        />
        <div className="nav-side">
          <div className="create-post" onClick={handleClickOpen}>
            <AddBoxOutlinedIcon sx={{ fontSize: "2.8rem", color: "#4d4d4d" }} />
          </div>

          <NavLink to="/profile">
            <div className="profile">
              <PermIdentityRoundedIcon
                sx={{ fontSize: "3.2rem", color: "#4d4d4d" }}
              />
            </div>
          </NavLink>

          <NavLink to="/login">
            <div className="sign-out" onClick={() => dispatch(authActions.logout())}>
              <LogoutRoundedIcon
                sx={{ fontSize: "2.8rem", color: "#4d4d4d" }}
              />
            </div>
          </NavLink>
        </div>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Paper sx={{width: "50rem"}}>
          <CreatePost handleClose={handleClose} />
        </Paper>
      </Dialog>
    </div>
  );
}
