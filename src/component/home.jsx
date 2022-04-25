import React from "react";
import "./home.css";
import Slider from "./carousel";
import Movies from "./movies";
import { stateContext } from "../helpers/context";
import { useContext } from "react";

const Home = () => {

    const { setState } = useContext(stateContext);
  return (
    <div className="main">
      <nav className="navbar">
        <img src="assets/images/logo.svg" alt="" onClick={() => setState('landing')} />
        <button className="btn">LOGIN</button>
      </nav>
      <Slider />
      <div className="logoDiv">
        <img src="assets/images/disney.jpg" alt="" className="logos" />
        <img src="assets/images/pixar.jpg" alt="" className="logos" />
        <img src="assets/images/marvel.jpg" alt="" className="logos" />
        <img src="assets/images/star.jpg" alt="" className="logos" />
        <img src="assets/images/national.jpg" alt="" className="logos" />
      </div>
      <Movies
        title="Recomended For You"
        title2="New to Disney+"
        title3="Original"
        title4="Trending"
      />
    </div>
  );
};

export default Home;
