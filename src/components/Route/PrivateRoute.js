import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Navbar from "../Navigation/Navbar";

const PrivateRoute = ({ component: Component }) => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  if (isAuth) {
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
