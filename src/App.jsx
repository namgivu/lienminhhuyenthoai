import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import HomePage from "./pages/Home/HomePage";

const App = () => {
  let routes;

  routes = (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Redirect to="/" />
    </Switch>
  );

  return <BrowserRouter>{routes}</BrowserRouter>;
};

export default App;
