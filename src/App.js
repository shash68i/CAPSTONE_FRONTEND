import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import "./App.css";
import "./style/utils.css";

import Navbar from "./components/Navigation/Navbar";

function App() {
  return (
    <Fragment>
      <Navbar />

      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Fragment>
  );
}

export default App;
