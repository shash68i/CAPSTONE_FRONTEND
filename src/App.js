import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import "./App.css";
import "./style/utils.css";
import Login from "./pages/Login";

// import Navbar from "./components/Navigation/Navbar";

function App() {
  return (
    <Fragment>
      {/* <Navbar /> */}

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Signup} />
          <Route exact path="/login" component={Login} />

          
        </Switch>
    </Fragment>
  );
}

export default App;
