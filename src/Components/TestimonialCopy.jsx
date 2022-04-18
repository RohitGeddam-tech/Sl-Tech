import React, { useRef, useState } from "react";
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
import { useSwipeable } from "react-swipeable";

const Testimonial = () => {
  const [width] = useWindowSize();
  const newRef = useRef(null);
  const [state, setState] = useState(0);
  // const [unscroll, setUnscroll] = useState(false);
  const [leftArrow, setLeftArrow] = useState(false);
  const [rightArrow, setRightArrow] = useState(false);

  const handleRight = () => {
    if (!rightArrow) {
      if (width < 405 && width > 255) {
        if (state === 0) {
          const stateIndex = state + 1;
          newRef.current.style.transform = `translate(-310px)`;
          setState(stateIndex);
        }
        if (state === 1) {
          const stateIndex = state + 1;
          newRef.current.style.transform = `translate(-640px)`;
          setState(stateIndex);
        }
        if (state === 2) {
          const stateIndex = state + 1;
          newRef.current.style.transform = `translate(-980px)`;
          setState(stateIndex);
        }
      }
      if (width < 650 && width > 405) {
        if (state === 0) {
          const stateIndex = state + 1;
          newRef.current.style.transform = `translate(-340px)`;
          setState(stateIndex);
        }
        if (state === 1) {
          const stateIndex = state + 1;
          newRef.current.style.transform = `translate(-720px)`;
          setState(stateIndex);
        }
        if (state === 2) {
          const stateIndex = state + 1;
          newRef.current.style.transform = `translate(-1080px)`;
          setState(stateIndex);
        }
      }
      if (width < 1020 && width > 650) {
        if (state === 0) {
          const stateIndex = state + 1;
          newRef.current.style.transform = `translate(-300px)`;
          setState(stateIndex);
        }
        if (state === 1) {
          const stateIndex = state + 1;
          newRef.current.style.transform = `translate(-600px)`;
          setState(stateIndex);
        }
        if (state === 2) {
          const stateIndex = state + 1;
          newRef.current.style.transform = `translate(-900px)`;
          setState(stateIndex);
        }
      }
      if (width < 1270 && width > 1020) {
        if (state === 0) {
          const stateIndex = state + 1;
          newRef.current.style.transform = `translate(-570px)`;
          setState(stateIndex);
        }
        if (state === 1) {
          const stateIndex = state + 1;
          newRef.current.style.transform = `translate(-1180px)`;
          setState(stateIndex);
        }
        if (state === 2) {
          const stateIndex = state + 1;
          newRef.current.style.transform = `translate(-1540px)`;
          setState(stateIndex);
        }
      }
      if (width >= 1270) {
        if (state === 0) {
          const stateIndex = state + 1;
          newRef.current.style.transform = `translate(-570px)`;
          setState(stateIndex);
        }
        if (state === 1) {
          const stateIndex = state + 1;
          newRef.current.style.transform = `translate(-1060px)`;
          setState(stateIndex);
        }
        if (state === 2) {
          const stateIndex = state + 1;
          newRef.current.style.transform = `translate(-1140px)`;
          setState(stateIndex);
        }
      }
    }
  };

  const handleLeft = () => {
    // if (state === 1) {
    //   const stateIndex = state - 1;
    //   newRef.current.style.transform = `translate(0%)`;
    //   setState(stateIndex);
    //   setUnscroll(true);
    // } else {
    if (!leftArrow) {
      if (state === 1) {
        const stateIndex = state - 1;
        newRef.current.style.transform = `translate(5px)`;
        setState(stateIndex);
      }
      if (width < 405 && width > 255) {
        if (state === 2) {
          const stateIndex = state - 1;
          newRef.current.style.transform = `translate(-310px)`;
          setState(stateIndex);
        }
        if (state === 3) {
          const stateIndex = state - 1;
          newRef.current.style.transform = `translate(-640px)`;
          setState(stateIndex);
        }
      }
      if (width < 650 && width > 405) {
        if (state === 2) {
          const stateIndex = state - 1;
          newRef.current.style.transform = `translate(-340px)`;
          setState(stateIndex);
        }
        if (state === 3) {
          const stateIndex = state - 1;
          newRef.current.style.transform = `translate(-720px)`;
          setState(stateIndex);
        }
      }
      if (width < 1020 && width > 650) {
        if (state === 2) {
          const stateIndex = state - 1;
          newRef.current.style.transform = `translate(-300px)`;
          setState(stateIndex);
        }
        if (state === 3) {
          const stateIndex = state - 1;
          newRef.current.style.transform = `translate(-600px)`;
          setState(stateIndex);
        }
      }
      if (width < 1270 && width > 1020) {
        if (state === 2) {
          const stateIndex = state - 1;
          newRef.current.style.transform = `translate(-570px)`;
          setState(stateIndex);
        }
        if (state === 3) {
          const stateIndex = state - 1;
          newRef.current.style.transform = `translate(-960px)`;
          setState(stateIndex);
        }
      }
      if (width >= 1270) {
        if (state === 2) {
          const stateIndex = state - 1;
          newRef.current.style.transform = `translate(-570px)`;
          setState(stateIndex);
        }
        if (state === 3) {
          const stateIndex = state - 1;
          newRef.current.style.transform = `translate(-760px)`;
          setState(stateIndex);
        }
      }
    }
    // if (state !== 0) {
    //   const stateIndex = state - 1;
    //   newRef.current.style.transform = `translate(-${stateIndex * 21.5}%)`;
    //   setState(stateIndex);
    //   setUnscroll(true);
    // }
    // }
  };

  const handleClick2 = () => {
    if (width < 405 && width > 255) {
      newRef.current.style.transform = `translate(-310px)`;
    }
    if (width < 650 && width > 405) {
      newRef.current.style.transform = `translate(-340px)`;
    }
    if (width < 1020 && width > 650) {
      newRef.current.style.transform = `translate(-300px)`;
    }
    if (width < 1270 && width > 1020) {
      newRef.current.style.transform = `translate(-570px)`;
    }
    if (width >= 1270) {
      newRef.current.style.transform = `translate(-570px)`;
    }
    setState(1);
  };

  const handleClick3 = () => {
    if (width < 405 && width > 255) {
      newRef.current.style.transform = `translate(-640px)`;
    }
    if (width < 650 && width > 405) {
      newRef.current.style.transform = `translate(-720px)`;
    }
    if (width < 1020 && width > 650) {
      newRef.current.style.transform = `translate(-600px)`;
    }
    if (width < 1270 && width > 1020) {
      newRef.current.style.transform = `translate(-1180px)`;
    }
    if (width >= 1270) {
      newRef.current.style.transform = `translate(-1060px)`;
    }
    setState(2);
  };

  const handleClick4 = () => {
    if (width < 405 && width > 255) {
      newRef.current.style.transform = `translate(-980px)`;
    }
    if (width < 650 && width > 405) {
      newRef.current.style.transform = `translate(-1080px)`;
    }
    if (width < 1020 && width > 650) {
      newRef.current.style.transform = `translate(-900px)`;
    }
    if (width < 1270 && width > 1020) {
      newRef.current.style.transform = `translate(-1340px)`;
    }
    if (width >= 1270) {
      newRef.current.style.transform = `translate(-1140px)`;
    }
    setState(3);
  };

  const handleClick1 = () => {
    newRef.current.style.transform = `translate(5px)`;
    setState(0);
  };

  React.useEffect(() => {
    if (state === 0) {
      setLeftArrow(true);
    } else {
      setLeftArrow(false);
    }
    // console.log(state);

    if (state >= 2) {
      setRightArrow(true);
    } else {
      setRightArrow(false);
    }
  }, [state]);

  const config = {
    delta: 10,
    preventDefaultTouchmoveEvent: false,
    trackTouch: true,
    trackMouse: true,
    rotationAngle: 0,
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      handleRight();
      // console.log("left swipe");
    },
    onSwipedRight: () => {
      handleLeft();
      // console.log("right swipe");
    },
    ...config,
  });

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
                onClick={handleLeft}
                className={`slickPrev ${leftArrow ? "disabled" : ""}`}
                alt="left"
              />
              <img
                src={right}
                onClick={handleRight}
                className={`slickNext ${rightArrow ? "disabled" : ""}`}
                alt="right"
              />
            </div>
          </div>
        </div>
        {/* onMouseOver={() => setUnscroll(false)} */}
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <div className="slider" {...handlers}>
            <div className={`slide`} ref={newRef}>
              <div className="testBox noselect">
                <p className="noselect">
                  It has been an absolute pleasure working with Raj, Jeet and
                  the team at Sugarlogger. They went out of the way to include
                  our suggestions on the website design and layout while
                  handling all the work with a lot of professionalism. There
                  were video calls every week to discuss updates on the website
                  which ensured things moved at the right pace to meet
                  timelines. Our best wishes to Team Sugarlogger.
                </p>
                <div className="testDetails">
                  <img src={testimon} alt="Saurabh Nayyar" />
                  <div className="dataVal">
                    <h5 className="noselect">Saurabh Nayyar</h5>
                    <p className="detail noselect">Docbel Health</p>
                  </div>
                </div>
              </div>
              <div className="testBox noselect">
                <p className="noselect">
                  Web development that is both reliable and affordable. The team
                  at Sugarlogger tech is particularly gifted at turning their
                  clients’ rough-sketch visions into glossy, combat-ready web
                  products. Responsive, personable, visionary: three reasons
                  this company comes highly recommended.
                </p>
                <div className="testDetails">
                  <img src={onkar} alt="Rohit Onkar" />
                  <div className="dataVal">
                    <h5 className="noselect">Rohit Onkar</h5>
                    <p className="detail noselect">Research & Ranking</p>
                  </div>
                </div>
              </div>
              <div className="testBox noselect">
                <p className="noselect">
                  Sugarlogger Tech has done a wonderful job redesigning our
                  website to take it from plain and functional to amazingly
                  professional. We would highly recommend Sugarlogger Tech to
                  any business that needs a hand improving their internet
                  traffic or their business.
                </p>
                <div className="testDetails">
                  <img src={rajeev} alt="Rajeev Chakrabarti" />
                  <div className="dataVal">
                    <h5 className="noselect">Rajeev Chakrabarti</h5>
                    <p className="detail noselect">Mirana Resort</p>
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
            </div>
          </div>
          <div className="dots">
            <div
              className={`dot ${state === 0 ? "active" : ""}`}
              onClick={handleClick1}
            ></div>
            <div
              className={`dot ${state === 1 ? "active" : ""}`}
              onClick={handleClick2}
            ></div>
            <div
              className={`dot ${state === 2 ? "active" : ""}`}
              onClick={handleClick3}
            ></div>
            {/* <div
              className={`dot ${state === 3 ? "active" : ""}`}
              onClick={handleClick4}
            ></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
