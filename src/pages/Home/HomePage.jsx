import React from "react";

import "./home.scss";
import MainNavigation from "../../compoments/Navigation/MainNavigation/MainNavigation";
import HomeBody from "./HomeContent/HomeBody";
import Footer from "../../compoments/Footer/Footer";

const Home = () => {
  return (
    <React.Fragment>
      <div className="page-wrapper">
        <MainNavigation />
        <HomeBody />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
