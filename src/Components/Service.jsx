import React from "react";
import white from "../images/arrowRightWhite.png";
import design from "../images/design.webp";
import web from "../images/web.webp";
import vid from "../images/vid.webp";
import graph from "../images/graphic.webp";
import social from "../images/social.webp";
import "./Service.scss";
import Aos from "aos";
import "aos/dist/aos.css";

const Service = () => {
  React.useEffect(() => {
    Aos.init({ duration: 500 });
  });
  return (
    <div className="service">
      <div className="container">
        <div className="serviceBox" data-aos="fade-up" data-aos-duration="1500">
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
        <div className="serviceBox" data-aos="fade-up" data-aos-duration="1500">
          <div className="contain boxDesign">
            <div className="boxHover"></div>
            <img src={design} alt="Web Design" />
            <h3>Web Design</h3>
          </div>
        </div>
        <div className="serviceBox" data-aos="fade-up" data-aos-duration="1500">
          <div className="contain boxWeb">
            <div className="boxHover"></div>
            <img src={web} alt="Web Development" />
            <h3>Web Development</h3>
          </div>
        </div>
        <div className="serviceBox" data-aos="fade-up" data-aos-duration="1500">
          <div className="contain boxGraph">
            <div className="boxHover"></div>
            <img src={graph} alt="Graphic Design" />
            <h3>Graphic Design</h3>
          </div>
        </div>
        <div className="serviceBox" data-aos="fade-up" data-aos-duration="1500">
          <div className="contain boxSocial">
            <div className="boxHover"></div>
            <img src={social} alt="Social Media Marketing" />
            <h3>Social Media Marketing</h3>
          </div>
        </div>
        <div className="serviceBox" data-aos="fade-up" data-aos-duration="1500">
          <div className="contain boxVid">
            <div className="boxHover"></div>
            <img src={vid} alt="Video Animation" />
            <h3>Video Animation</h3>
          </div>
        </div>
        <div className="bottom" data-aos="fade-up" data-aos-duration="1500">
          <button className="btn blueBtn">
            Learn More{" "}
            <span>
              <img src={white} alt="whiteArrow" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
