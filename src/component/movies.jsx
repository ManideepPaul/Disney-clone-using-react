import React from "react";
import "./movies.css";

const Movies = (props) => {
  return (
    <div className="movieDiv">
      <p>{props.title}</p>
      <div className="movieTiles">
        <img src="assets/images/scale11.jpg" alt="" />
        <img src="assets/images/scale3.jpg" alt="" />
        <img src="assets/images/scale12.jpg" alt="" />
        <img src="assets/images/scale.jpg" alt="" />
      </div>
      <p>{props.title2}</p>
      <div className="movieTiles">
        <img src="assets/images/scale9.jpg" alt="" />
        <img src="assets/images/scale15.jpg" alt="" />
        <img src="assets/images/scale7.jpg" alt="" />
        <img src="assets/images/scale13.jpg" alt="" />
      </div>
      <p>{props.title3}</p>
      <div className="movieTiles">
        <img src="assets/images/badging2.jpg" alt="" />
        <img src="assets/images/scale2.jpg" alt="" />
        <img src="assets/images/badging7.jpg" alt="" />
        <img src="assets/images/scale8.jpg" alt="" />
      </div>
      <p>{props.title4}</p>
      <div className="movieTiles">
        <img src="assets/images/scale5.jpg" alt="" />
        <img src="assets/images/scale17.jpg" alt="" />
        <img src="assets/images/scale4.jpg" alt="" />
        <img src="assets/images/scale14.jpg" alt="" />
      </div>
    </div>
  );
};

export default Movies
