import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import Features from "./pages/Features/Features";

const App = () => {
  let routes;

  routes = (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/features" exact>
        <Features />
      </Route>
      <Redirect to="/"></Redirect>
    </Switch>
  );

  return <BrowserRouter>{routes}</BrowserRouter>;
};

export default App;
