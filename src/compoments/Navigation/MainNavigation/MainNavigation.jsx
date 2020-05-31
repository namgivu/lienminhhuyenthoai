import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./MainNavigation.scss";
import Navigation from "../Navigation";

const MainNavigation = () => {
  return (
    <Navigation className="mb-auto">
      <div className="nav-bar">
        <div className="nav-brand">Cover</div>
        <nav className="nav-menu justify-content-center">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/features">
            Features
          </NavLink>
        </nav>
      </div>
    </Navigation>
  );
};

export default MainNavigation;
