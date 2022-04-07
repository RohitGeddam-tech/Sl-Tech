import React from "react";
import "./Vision.scss";
import vision from "../../images/vision.png";
import mission from "../../images/mission.png";
import values from "../../images/values.png";
import Aos from "aos";

const Vision = () => {
  React.useEffect(() => {
    Aos.init({ duration: 500 });
  });
  return (
    <div className="vision">
      <div className="container">
        <div
          className="visionBox"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <img src={vision} alt="vision" />
          <div className="visionData">
            <h1>Our Vision</h1>
            <p>
              {/* To consistently lead technology innovation and provide technology
              software services and solutions with exceptional quality, sharp
              turn around time and cost effectiveness. */}
              To offer transparent and ethical technology solutions that
              continually outperforms our customers expectations and inspires
              their businesses to thrive.
            </p>
          </div>
        </div>
        <div
          className="visionBox"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <img src={mission} alt="mission" />
          <div className="visionData">
            <h1>Our Mission</h1>
            <p>
              We stand apart as a leading technology innovator highly-visible,
              massively effective, and undeniably attractive websites to make
              our customers look amazing.
            </p>
          </div>
        </div>
        <div
          className="visionBox a"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <img src={values} alt="values" />
          <div className="visionData">
            <h1>Our Values</h1>
            <p>
              We aim to be honest, authentic, and act with integrity, serving
              our customers using principled motives and authoritative choices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
