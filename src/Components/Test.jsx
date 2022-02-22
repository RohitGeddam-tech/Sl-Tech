import React from "react";
import "./Test.scss";

const Test = () => {
  return (
    <div className="test">
      <div className="container">
        <h2>Client Testimonials</h2>
        <div className="arrow">
          <p>Take a look at what our clients have to say about our work</p>
        </div>
        <div className="slider">
          <div className="slide">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
