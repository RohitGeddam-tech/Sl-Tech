import React, { useCallback, useEffect, useState, useRef } from "react";
import "./ServiceBody.scss";
// import data from "./Data";
// import ServiceComp from "./ServiceComp";
import design from "../../images/bgdesign.png";
import web from "../../images/bgweb.png";
import vid from "../../images/bgvid.png";
import graph from "../../images/bggraphic.png";
import social from "../../images/bgsocial.png";

const ServiceBody = () => {
  const first = useRef();
  const second = useRef();
  const third = useRef();
  const fourth = useRef();
  const fifth = useRef();

  const isInView = () => {
    const rect = window.pageYOffset;
    return rect >= 410 && rect <= 810;
  };

  const [inView, setInView] = useState(false);

  const scrollHandler = useCallback(() => {
    setInView(isInView());
    // setInView(isView());
  }, []);

  useEffect(() => {
    setInView(isInView());
    // setInView(isView());
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

  const cssFix = inView ? "" : "";

  return (
    <div className="servBody">
      <div className="container">
        <div className="fullBody">
          <div className={`bodyLeft ${cssFix}`}>
            <div className="imgClass">
              <img src={design} alt={"Web Design"} />
              <p className={"Web Design"}>Web Design</p>
            </div>
          </div>
          <div className="bodyRight">
            <div className="bodyDetails">
              <div className={`bodyBox UI Design`}>
                <h1>UI Design</h1>
                <p>
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form of a document or a typeface without relying on
                  meaningful content
                </p>
              </div>
              <div className={`bodyBox UX Design`}>
                <h1>UX Design</h1>
                <p>
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form of a document or a typeface without relying on
                  meaningful content
                </p>
              </div>
            </div>
            <div className="bodyDetails a">
              <div className={`bodyBox Wireframing`}>
                <h1>Wireframing</h1>
                <p>
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form of a document or a typeface without relying on
                  meaningful content
                </p>
              </div>
              <div className={`bodyBox Interactive Prototyping`}>
                <h1>Interactive Prototyping</h1>
                <p>
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form of a document or a typeface without relying on
                  meaningful content
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="fullBody">
          <div className={`bodyLeft ${cssFix}`}>
            <div className="imgClass">
              <img src={web} alt={"Web Development"} />
              <p className={"Web Development"}>Web Development</p>
            </div>
          </div>
          <div className="bodyRight">
            <div className="bodyDetails">
              <div className={`bodyBox Interface Development`}>
                <h1>Interface Development</h1>
                <p>
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form of a document or a typeface without relying on
                  meaningful content
                </p>
              </div>
              <div className={`bodyBox Backend Development`}>
                <h1>Backend Development</h1>
                <p>
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form of a document or a typeface without relying on
                  meaningful content
                </p>
              </div>
            </div>
            <div className="bodyDetails a">
              <div className={`bodyBox Mobile Development`}>
                <h1>Mobile Development</h1>
                <p>
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form of a document or a typeface without relying on
                  meaningful content
                </p>
              </div>
              <div className={`bodyBox E-commerce setup`}>
                <h1>E-commerce setup</h1>
                <p>
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form of a document or a typeface without relying on
                  meaningful content
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="fullBody">
          <div className={`bodyLeft`}>
            <div className="imgClass">
              <img src={graph} alt={"Graphic Design"} />
              <p className={"Graphic Design"}>Graphic Design</p>
            </div>
          </div>
          <div className="bodyRight">
            <div className="bodyDetails">
              <div className={`bodyBox Graphic Illustrations`}>
                <h1>Graphic Illustrations</h1>
                <p>
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form of a document or a typeface without relying on
                  meaningful content
                </p>
              </div>
              <div className={`bodyBox Quality Optimization`}>
                <h1>Quality Optimization</h1>
                <p>
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form of a document or a typeface without relying on
                  meaningful content
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="fullBody">
          <div className={`bodyLeft`}>
            <div className="imgClass">
              <img src={social} alt={"Social Media Marketing"} />
              <p className={"Social Media Marketing"}>Social Media Marketing</p>
            </div>
          </div>
          <div className="bodyRight">
            <div className="bodyDetails">
              <div className={`bodyBox Strategy Formulation`}>
                <h1>Strategy Formulation</h1>
                <p>
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form of a document or a typeface without relying on
                  meaningful content
                </p>
              </div>
              <div className={`bodyBox Multi-platform campaigns`}>
                <h1>Multi-platform campaigns</h1>
                <p>
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form of a document or a typeface without relying on
                  meaningful content
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="fullBody">
          <div className={`bodyLeft`}>
            <div className="imgClass">
              <img src={vid} alt={"Video Animation"} />
              <p className={"Video Animation"}>Video Animation</p>
            </div>
          </div>
          <div className="bodyRight">
            <div className="bodyDetails">
              <div className={`bodyBox Motion Graphics`}>
                <h1>Motion Graphics</h1>
                <p>
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form of a document or a typeface without relying on
                  meaningful content
                </p>
              </div>
              <div className={`bodyBox Audacity`}>
                <h1>Audacity</h1>
                <p>
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form of a document or a typeface without relying on
                  meaningful content
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBody;
