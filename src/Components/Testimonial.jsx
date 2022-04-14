import React from "react";
import "./Testimonial.scss";
// import left from "../images/arrowLeft.svg";
// import right from "../images/arrowRight.svg";
// import left from "../images/arrowLeft.svg";
// import right from "../images/arrowRight.svg";
import testimon from "../images/test.png";
import onkar from "../images/onkar.jpeg";
import rajeev from "../images/rajeev.jpeg";
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
                things moved at the right pace to meet timelines. Our best
                wishes to Team Sugarlogger.
              </p>
              <div className="testDetails">
                <img src={testimon} alt="Saurabh Nayyar" />
                <div className="dataVal">
                  <h5>Saurabh Nayyar</h5>
                  <p className="detail">Docbel Health</p>
                </div>
              </div>
            </div>
            <div className="testBox">
              <p>
                Web development that is both reliable and affordable. The team
                at Sugarlogger tech is particularly gifted at turning their
                clients’ rough-sketch visions into glossy, combat-ready web
                products. Responsive, personable, visionary: three reasons this
                company comes highly recommended.
              </p>
              <div className="testDetails">
                <img src={onkar} alt="Rohit Onkar" />
                <div className="dataVal">
                  <h5>Rohit Onkar</h5>
                  <p className="detail">Research & Ranking</p>
                </div>
              </div>
            </div>
            <div className="testBox">
              <p>
                Sugarlogger Tech has done a wonderful job redesigning our
                website to take it from plain and functional to amazingly
                professional. We would highly recommend Sugarlogger Tech to any
                business that needs a hand improving their internet traffic or
                their business.
              </p>
              <div className="testDetails">
                <img src={rajeev} alt="Rajeev Chakrabarti" />
                <div className="dataVal">
                  <h5>Rajeev Chakrabarti</h5>
                  <p className="detail">Mirana Resort</p>
                </div>
              </div>
            </div>
            {/* <div className="testBox">
                <p>
                  “Lorem ipsum is a placeholder text commonly used to
                  demonstrate the visual form of a document or a typeface
                  without relying on meaningful content”
                </p>
                <div className="testDetails">
                  <img src={testimon} alt="testimonial" />
                  <div className="dataVal">
                    <h5>Saurabh Nayyar</h5>
                    <p className="detail">Docbel Health</p>
                  </div>
                </div>
              </div> */}
          </Custom>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
