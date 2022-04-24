import React from "react";
import { render } from "react-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css"

const Slider = () => {
  return (
    <div className="mainDiv">
      <Carousel
        autoPlay
        centerMode
        infiniteLoop
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        stopOnHover
      >
        <div className="imageDiv">
          <img class="slider" alt="" src="assets/images/badging.jpg" />
        </div>
        <div className="imageDiv">
          <img class="slider" alt="" src="assets/images/badging2.jpg" />
        </div>
        <div className="imageDiv">
          <img class="slider" alt="" src="assets/images/badging3.jpg" />
        </div>
        <div className="imageDiv">
          <img class="slider" alt="" src="assets/images/badging4.jpg" />
        </div>
        <div className="imageDiv">
          <img class="slider" alt="" src="assets/images/badging5.jpg" />
        </div>
        <div className="imageDiv">
          <img class="slider" alt="" src="assets/images/badging6.jpg" />
        </div>
        <div className="imageDiv">
          <img class="slider" alt="" src="assets/images/badging7.jpg" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
