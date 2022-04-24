import React from "react";
import "./home.css";
import Slider from "./carousel";

const Home = () => {
  return (
    <div className="main">
      <nav className="navbar">
        <img src="assets/images/logo.svg" alt="" />
        <button className="btn">LOGIN</button>
      </nav>
      <Slider />
      <div className="logoDiv">
        <img src="assets/images/cta-logo-two.png" alt="" className="logos" />
      </div>
    </div>
  );
};

export default Home;
