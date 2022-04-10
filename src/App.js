import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import "./App.css";
import "./style/utils.css";
import Login from "./pages/Login";

import Navbar from "./components/Navigation/Navbar";
import DetailPostCard from "./pages/DetailPostCard";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import CreatePost from "./pages/CreatePost";
import PrivateRoute from "./components/Route/PrivateRoute";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Fragment>

      <Routes>
        {/* Unauthorized Routes */}
        <Route path="register" element={<Signup />} />
        <Route path="login" element={<Login />} />

        {/* Protected Routes */}
        <Route path="/" element={<PrivateRoute component={Home} />} />
        <Route
          path="post"
          element={<PrivateRoute component={DetailPostCard} />}
        />

        <Route path="profile" element={<PrivateRoute component={Profile} />} />

        <Route
          path="edit-profile"
          element={<PrivateRoute component={EditProfile} />}
        />

        <Route
          path="create-post"
          element={<PrivateRoute component={CreatePost} />}
        />
      </Routes>
    </Fragment>
  );
}

export default App;
