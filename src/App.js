import React, { Fragment, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import "./App.css";
import Login from "./pages/Login";

import Navbar from "./components/Navigation/Navbar";
import DetailPostCard from "./pages/DetailPostCard";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import CreatePost from "./pages/CreatePost";
import PrivateRoute from "./components/Route/PrivateRoute";
import { ToastContainer } from "react-toastify";
import setAuthToken from "./utils/setAuthToken";
import { authActions, loadUser } from "./slices/authSlice";
import CreateProfile from "./pages/CreateProfile";
import UserProfile from "./pages/UserProfile";

import "react-toastify/dist/ReactToastify.css";
import { getMyProfile } from "./slices/userSlice";

function App() {
  const token = useSelector((state) => state.auth.token);
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.token) {
      // if there is a token set axios headers for all requests
      setAuthToken(localStorage.token);
    }
    // try to fetch a user, if no token or invalid token we
    // will get a 401 response from our API
    dispatch(loadUser());
    dispatch(getMyProfile());

    // log user out from all tabs if they log out in one tab
    // window.addEventListener("storage", () => {
    //   if (!localStorage.token) dispatch(authActions.logoutUser());
    // });
  }, []);

  return (
    <Fragment>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="colored"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Routes>
        {/* Unauthorized Routes */}
        <Route path="register" element={<Signup />} />
        <Route path="login" element={<Login />} />

        {/* Protected Routes */}
        <Route path="/" element={<PrivateRoute component={Home} />} />

        <Route path="profile" element={<PrivateRoute component={Profile} />} />

        <Route
          path="create-profile"
          element={<PrivateRoute component={CreateProfile} />}
        />

        <Route
          path="edit-profile"
          element={<PrivateRoute component={EditProfile} />}
        />

        <Route
          path="create-post"
          element={<PrivateRoute component={CreatePost} />}
        />

        <Route
          path="posts/:id"
          element={<PrivateRoute component={DetailPostCard} />}
        />
        <Route
          path="users/:id"
          element={<PrivateRoute component={UserProfile} />}
        />
      </Routes>
    </Fragment>
  );
}

export default App;
