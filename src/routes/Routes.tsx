

import React, { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Home } from "../pages/Home";
import { Authors } from "../pages/Authors";
import { Coments } from "../pages/Coments";

export const Routes: FC = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/authors" component={Authors} />
        <Route path="/coments" component={Coments} />
      </Switch>
    </Router>
  );
};
