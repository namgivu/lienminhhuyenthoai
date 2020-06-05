import React, { useEffect, useState } from "react";
import api from "compoments/Axios/api";

const HomeBody = () => {
  // process.env.HEALTH_URL; /*TODO Kien make this loaded via .env*/

  // --> create an axios instance to store the BASE_URL in .env file.
  // Then : axios.get("/health") = axios.get("http://localhost:5000/health")

  const [respondData, setRespondData] = useState("");
  //     stateValue   setState

  useEffect(() => {
    const getDataFromHealthAPI = async () => {
      try {
        let r = await api.get("/health");
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
