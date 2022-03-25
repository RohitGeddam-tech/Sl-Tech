import React from "react";
import "./Testimonial.scss";
// import left from "../images/arrowLeft.svg";
// import right from "../images/arrowRight.svg";
import Custom from "./Custom";
import Aos from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {
  React.useEffect(() => {
    Aos.init({ duration: 500 });
  });
  return (
    <div className="test">
      <div className="container">
        <div
          className="arrow"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <h2>Client Testimonials</h2>
          <p>Take a look at what our clients have to say about our work</p>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <Custom>
            <div className="testBox">
              <p>
                It has been an absolute pleasure working with Raj, Jeet and the
                team at Sugarlogger. They went out of the way to include our
                suggestions on the website design and layout while handling all
                the work with a lot of professionalism. There were video calls
                every week to discuss updates on the website which ensured
                things moved at the right pace to meet timelines. The team
                accommodated our request to add some work which was out of the
                agreed scope as well. Our best wishes to Team Sugarlogger.
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
    </div>
  );
};

export default Testimonial;
