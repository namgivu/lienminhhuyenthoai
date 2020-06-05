import React, { useState, useEffect } from "react";
import "./footer.scss";
import api from "compoments/Axios/api";

const Footer = () => {
  const [respondData, setRespondData] = useState("");

  useEffect(() => {
    const getDataFromHealthAPI = async () => {
      try {
        let r = await api.get("/health");
        setRespondData(r.data.version);
      } catch (error) {
        console.log(error);
      }
    };
    getDataFromHealthAPI();
  }, []);

  return (
    <footer className="home__footer mt-auto">
      Cover template for <a href="https://www.w3schools.com"> Bootstrap</a>, by
      @mdo.
      <p>Version : {respondData} </p>
    </footer>
  );
};

export default Footer;
