import React from "react";
import white from "../images/arrowRightWhite.png";
import design from "../images/design.png";
import web from "../images/web.png";
import vid from "../images/vid.png";
import graph from "../images/graphic.png";
import social from "../images/social.png";
import "./Service.scss";

const Service = () => {
  return (
    <div className="service">
      <div className="container">
        <div className="serviceBox">
          <div className="contain plain">
            <h2>Our Services</h2>
            <p>These are the things that we’re good at!</p>
            <button className="btn blueBtn">
              Learn More{" "}
              <span>
                <img src={white} alt="whiteArrow" />
              </span>
            </button>
          </div>
        </div>
        <div className="serviceBox">
          <div className="contain boxDesign">
            <img src={design} alt="Web Design" />
            <h3>Web Design</h3>
          </div>
        </div>
        <div className="serviceBox">
          <div className="contain boxWeb">
            <img src={web} alt="Web Development" />
            <h3>Web Development</h3>
          </div>
        </div>
        <div className="serviceBox">
          <div className="contain boxGraph">
            <img src={graph} alt="Graphic Design" />
            <h3>Graphic Design</h3>
          </div>
        </div>
        <div className="serviceBox">
          <div className="contain boxSocial">
            <img src={social} alt="Social Media Marketing" />
            <h3>Social Media Marketing</h3>
          </div>
        </div>
        <div className="serviceBox">
          <div className="contain boxVid">
            <img src={vid} alt="Video Animation" />
            <h3>Video Animation</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
