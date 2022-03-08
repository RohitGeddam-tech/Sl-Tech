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
        <div className="visionBox" data-aos="fade-up" data-aos-duration="1500">
          <img src={vision} alt="vision" />
          <div className="visionData">
            <h1>Our Vision</h1>
            <p>
              To consistently lead technology innovation and provide technology
              software services and solutions with exceptional quality, sharp
              turn around time and cost effectiveness.
            </p>
          </div>
        </div>
        <div className="visionBox" data-aos="fade-up" data-aos-duration="1500">
          <img src={mission} alt="mission" />
          <div className="visionData">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document or a typeface without relying on
              meaningful content
            </p>
          </div>
        </div>
        <div
          className="visionBox a"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <img src={values} alt="values" />
          <div className="visionData">
            <h1>Our Values</h1>
            <p>
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document or a typeface without relying on
              meaningful content
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
