import React, { useEffect, useState } from "react";
import Axios from "axios";

const HomeBody = () => {
  const HEALTH_URL =
    "http://localhost:5000/health"; /*TODO Kien make this loaded via .env*/

  const [respondData, setRespondData] = useState(""); /*TODO Kien typo respond*/
  //     stateValue   setState

  useEffect(() => {
    const getDataFromHealthAPI = async () => {
      try {
        let r = await Axios.get(HEALTH_URL);
        setRespondData(r.data.message);
      } catch (error) {
        console.log(error);
      }
    };
    getDataFromHealthAPI();
  }, []);

  return (
    <main>
      <h1 className="home__heading">Cover your page.</h1>
      <p className="home__p"></p>
      <p>Message from Health API: {respondData} </p>
      <p className="home__p">
        <button className="btn btn-lg btn-secondary">Learn more</button>
      </p>
    </main>
  );
};

export default HomeBody;
