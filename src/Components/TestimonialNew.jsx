import React, { useEffect, useRef, useState } from "react";
import "./Testimonial.scss";
import left from "../images/arrowLeft.svg";
import right from "../images/arrowRight.svg";
import testimon from "../images/test.png";
import onkar from "../images/onkar.jpeg";
import rajeev from "../images/rajeev.jpeg";
// import Custom from "./Custom";
import Aos from "aos";
import "aos/dist/aos.css";
import useWindowSize from "../layout/useWindowSize";
import $ from "jquery";

const Testimonial = () => {
  const [width] = useWindowSize();
  // const newRef = useRef(null);
  const [state, setState] = useState(0);
  // const [unscroll, setUnscroll] = useState(false);
  const [leftArrow, setLeftArrow] = useState(true);
  const [rightArrow, setRightArrow] = useState(false);

  window.$ = window.jQuery = require("jquery");

  useEffect(() => {
    var paddleMargin = 20;

    var getMenuWrapperSize = function () {
      return $(".menu-wrapper").outerWidth();
    };
    var menuWrapperSize = getMenuWrapperSize();

    $(window).on("resize", function () {
      menuWrapperSize = getMenuWrapperSize();
    });

    var getMenuSize = function () {
      return 865 + 610 + 610 + 34;
    };

    var menuSize = getMenuSize();

    var menuInvisibleSize = menuSize - menuWrapperSize;

    var getMenuPosition = function () {
      return $(".menu").scrollLeft();
    };

    $(".menu").on("scroll", function () {
      menuInvisibleSize = 2119 - menuWrapperSize;

      var menuPosition = getMenuPosition();

      var menuEndOffsetNew = menuInvisibleSize - 40;

      if (menuWrapperSize > 867) {
        // console.log(menuPosition, menuEndOffsetNew);
        if (menuPosition <= paddleMargin) {
          setLeftArrow(true);
          setRightArrow(false);
        } else if (menuPosition <= menuEndOffsetNew) {
          setLeftArrow(false);
          setRightArrow(false);
          // console.log("menuPosition < menuEndOffsetNew");
        } else if (menuPosition >= menuEndOffsetNew + 15) {
          setLeftArrow(false);
          setRightArrow(true);
          // console.log("menuPosition >= menuEndOffsetNew");
        }
      }
      if (menuWrapperSize < 867) {
        var menuSize = 370 + 370 + 370 + 35;
        var menuInvisibleSize = menuSize - menuWrapperSize;
        var menuEndOffset = menuInvisibleSize - 40;
        // console.log(menuPosition, "menuPosition <400");
        // console.log("menuPosition <400");
        if (menuPosition <= paddleMargin) {
          setLeftArrow(true);
          setRightArrow(false);
        } else if (menuPosition < menuEndOffset) {
          setLeftArrow(false);
          setRightArrow(false);
        } else if (menuPosition >= menuEndOffset) {
          setLeftArrow(false);
          setRightArrow(true);
        }
      }
    });

    $("#next").on("click", () => {
      const width = getMenuWrapperSize();

      // var value = 0;
      // const val = value + 1;
      // setState(val);
      if (width > 1250) {
        $(".menu").animate(
          {
            scrollLeft: getMenuPosition() + 500,
          },
          200
        );
      }
      if (width < 1250 && width > 1020) {
        $(".menu").animate(
          {
            scrollLeft: getMenuPosition() + 620,
          },
          200
        );
      }
      if (width < 1020 && width > 700) {
        $(".menu").animate(
          {
            scrollLeft: getMenuPosition() + 600,
          },
          200
        );
      }
    });

    $("#prev").on("click", () => {
      const width = getMenuWrapperSize();
      if (width > 1250) {
        $(".menu").animate(
          {
            scrollLeft: getMenuPosition() - 400,
          },
          200
        );
      }
      if (width < 1250 && width > 1020) {
        $(".menu").animate(
          {
            scrollLeft: getMenuPosition() - 620,
          },
          200
        );
      }
      if (width < 1020 && width > 700) {
        $(".menu").animate(
          {
            scrollLeft: getMenuPosition() - 600,
          },
          200
        );
      }
    });

    $("#firstDot").on("click", () => {
      $(".menu").animate(
        {
          scrollLeft: 0,
        },
        200
      );
      setState(0);
    });

    $("#secondDot").on("click", () => {
      if (width > 1250) {
        $(".menu").animate(
          {
            scrollLeft: 500,
          },
          200
        );
      }
      if (width < 1250 && width > 1020) {
        $(".menu").animate(
          {
            scrollLeft: 620,
          },
          200
        );
      }
      if (width < 1020 && width > 900) {
        $(".menu").animate(
          {
            scrollLeft: 600,
          },
          200
        );
      }
      if (width < 900) {
        $(".menu").animate(
          {
            scrollLeft: 340,
          },
          200
        );
      }
      setState(1);
    });

    $("#thirdDot").on("click", () => {
      if (width > 1250) {
        $(".menu").animate(
          {
            scrollLeft: 1200,
          },
          200
        );
        // console.log("");
      }
      if (width < 1250 && width > 1020) {
        $(".menu").animate(
          {
            scrollLeft: 1240,
          },
          200
        );
      }
      if (width < 1020 && width > 900) {
        $(".menu").animate(
          {
            scrollLeft: 1200,
          },
          200
        );
      }
      if (width < 900) {
        $(".menu").animate(
          {
            scrollLeft: 1200,
          },
          200
        );
      }
      setState(2);
    });
  }, []);

  // const [newleft, setNewLeft] = useState(0);

  useEffect(() => {
    // console.log($(".one").offset().left);
    // window.addEventListener("resize", () => {
    var getMenuWrapperSize = function () {
      return $(".menu-wrapper").outerWidth();
    };
    var menuWrapperSize = getMenuWrapperSize();
    $(".menu").on("scroll", function () {
      // console.log("with: ", width);
      // console.log($(".three").offset().left);
      if (menuWrapperSize > 867) {
        if ($(".one").offset().left >= 0) {
          setState(0);
        } 
        if ($(".two").offset().left < 550) {
          setState(1);
        } 
        if ($(".three").offset().left < 900) {
          setState(2);
        }
        // console.log("running");
      }
      if (menuWrapperSize < 867 && menuWrapperSize > 748) {
        // if ($(".one").offset().left >= 0) {
        //   setState(0);
        // }
        if ($(".two").offset().left < 100) {
          setState(1);
        } else {
          setState(0);
        }
        // console.log("running 2");
      }
      if (menuWrapperSize < 748) {
        // console.log($(".three").offset().left);
        if ($(".one").offset().left >= 0) {
          setState(0);
        } else {
          setState(1);
        }
        if ($(".two").offset().left < 110) {
          setState(1);
        }
        if ($(".three").offset().left < 390) {
          setState(2);
        }
        // console.log("running 3");
      }
    });
    // });
    // if (newleft === 0) {
    // console.log($(".two").offset().left);
    // setNewLeft(0);
    // }
  }, []);

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
          <div className="arrowNav">
            <p>Take a look at what our clients have to say about our work</p>
            <div className="arrowImg">
              <img
                src={left}
                // onClick={handleLeft}
                id="prev"
                className={`slickPrev ${leftArrow ? "disabled" : ""}`}
                alt="left"
              />
              <img
                src={right}
                // onClick={handleRight}
                id="next"
                className={`slickNext ${rightArrow ? "disabled" : ""}`}
                alt="right"
              />
            </div>
          </div>
        </div>
        <div className="menu-wrapper">
          <ul className="menu">
            <li className="item one">
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
            </li>
            <li className="item two">
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
            </li>
            <li className="item three">
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
            </li>
            <li className="item fourth"></li>
            {/* <li className="item">4</li>
            <li className="item">5</li>
            <li className="item">6</li>
            <li className="item">7</li>
            <li className="item">8</li>
            <li className="item">9</li>
            <li className="item">10</li>
            <li className="item">11</li>
            <li className="item">12</li>
            <li className="item">13</li> */}
          </ul>
        </div>

        {/* {width < 901 ? ( */}
        <div className="dots">
          <div
            id="firstDot"
            className={`dot ${state === 0 ? "active" : ""}`}
            // onClick={handleClick1}
          ></div>
          <div
            id="secondDot"
            className={`dot ${state === 1 ? "active" : ""}`}
            // onClick={handleClick2}
          ></div>
          {width > 880 && width < 1020 ? null : (
            <div
              id="thirdDot"
              className={`dot ${state === 2 ? "active" : ""}`}
              // onClick={handleClick3}
            ></div>
          )}
          {/* <div
              className={`dot ${state === 3 ? "active" : ""}`}
              onClick={handleClick4}
            ></div> */}
        </div>
        {/* // ) : null} */}
      </div>
    </div>
  );
};

export default Testimonial;
