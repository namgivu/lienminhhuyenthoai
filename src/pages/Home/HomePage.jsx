import React from "react";

import "./home.scss";
import MainNavigation from "compoments/Navigation/MainNavigation/MainNavigation";
import HomeBody from "pages/Home/HomeContent/HomeBody";
import Footer from "compoments/Footer/Footer";

const Home = () => {
  return (
    <React.Fragment>
      <div className="page-wrapper d-flex h-100 p-3 mx-auto flex-column">
        <MainNavigation />
        <HomeBody />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Home;
