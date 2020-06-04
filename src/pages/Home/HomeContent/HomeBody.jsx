import React, { useEffect, useState } from "react";
import Axios from "axios";

const HomeBody = () => {
  const URL = "http://localhost:5000/health";
  const [responeData, setResponeData] = useState("");  /*TODO Kien typo respond*/

  useEffect(() => {
    const getDataFromHealthAPI = async () => {
      try {
        let tempdata = await Axios.get(URL);
        setResponeData(tempdata.data.message);
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
      <p>Message from Health API: {responeData} </p>
      <p className="home__p">
        <button className="btn btn-lg btn-secondary">Learn more</button>
      </p>
    </main>
  );
};

export default HomeBody;
