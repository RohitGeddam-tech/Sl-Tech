import React from "react";
import "./Testimonial.scss";
// import left from "../images/arrowLeft.svg";
// import right from "../images/arrowRight.svg";
import Custom from "./Custom";

const Testimonial = () => {
  return (
    <div className="test">
      <div className="container">
        <div className="arrow">
          <h2>Client Testimonials</h2>
          <p>Take a look at what our clients have to say about our work</p>
        </div>
        <Custom>
          <div className="testBox">
            <p>
              “Lorem ipsum is a placeholder text commonly used to demonstrate
              the visual form of a document or a typeface without relying on
              meaningful content”
            </p>
            <h5>Saurabh Nayyar</h5>
            <p className="detail">Docbel Health</p>
          </div>
          <div className="testBox">
            <p>
              “Lorem ipsum is a placeholder text commonly used to demonstrate
              the visual form of a document or a typeface without relying on
              meaningful content”
            </p>
            <h5>Rohit Onkar</h5>
            <p className="detail">Research & Ranking</p>
          </div>
          <div className="testBox">
            <p>
              “Lorem ipsum is a placeholder text commonly used to demonstrate
              the visual form of a document or a typeface without relying on
              meaningful content”
            </p>
            <h5>Saurabh Nayyar</h5>
            <p className="detail">Docbel Health</p>
          </div>
        </Custom>
      </div>
    </div>
  );
};

export default Testimonial;
