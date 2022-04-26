import { CircularProgress } from "@mui/material";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Navbar from "../Navigation/Navbar";

const PrivateRoute = ({ component: Component }) => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);

  if(loading) {
    return <CircularProgress />
  }

  if (isAuth) {
    window.scrollTo(0, 0);
    return (
      <Fragment>
        <Navbar />
        <Component />;
      </Fragment>
    );
  }

  return <Navigate to="/login" />;
};

export default PrivateRoute;
