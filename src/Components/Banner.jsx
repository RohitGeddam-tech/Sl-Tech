import React, { useState } from "react";
import lap from "../images/banner1.webp";
import "./Banner.scss";
import Popup from "./Modal";
import CustomSlider from "./Slider";
import Aos from "aos";
import "aos/dist/aos.css";
import LazyLoad from "react-lazyload";

const BannerSlider = () => {
  const [email, setEmail] = useState("");
  // const [src, setSrc] = useState("");
  // const [email, setEmail] = useState("");
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [valid, setValid] = useState(false);
  // const [hover, setHover] = useState(false);

  React.useEffect(() => {
    Aos.init({ duration: 500 });
  });
  // React.useEffect(() => {
  //   const timer = setTimeout(() => {
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   }, 1050);
  //   return () => clearTimeout(timer);
  // }, []);

  const handleChange = (e) => {
    setEmail(e.target.value);
    setEmailInvalid(!e.target.validity.valid);
    setInvalid(false);
  };
  const handleSubmit = () => {
    if (emailInvalid || email === "") {
      setInvalid(true);
    } else {
      setValid(true);
      // setEmail("");
    }
  };

  // useEffect(() => {
  //   setSrc(lap);
  // }, []);

  return (
    <div className="bannerSlider">
      <CustomSlider>
        <div>
          <div className="banner">
            <div className="container">
              <div
                className="bannerBox"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                {/* <h1>Helping you get your business online</h1> */}
                <h1>Standout Online Strategies to Sell Your Brand Better</h1>
                <p>
                  {/* Setting up an online presence does not happen overnight. We
                  help you adopt the right strategies & digital platforms to
                  build an effective online presence. */}
                  Get your business on track with an online presence that wows,
                  lasts, and impels customers to use your brand.
                </p>
                <div className="bottom">
                  <div className="touch">
                    <div className={`textInput ${invalid ? "errorInput" : ""}`}>
                      <input
                        className="input"
                        value={email}
                        type="email"
                        name="email"
                        pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$"
                        required
                        onChange={handleChange}
                      />
                      <label htmlFor="email">
                        Enter your email address{" "}
                        <span style={{ color: "red" }}>*</span>
                      </label>
                      {invalid ? (
                        <p className="error-text">
                          We will need your email address to get in touch
                        </p>
                      ) : null}
                    </div>
                    <button onClick={handleSubmit} className="btn">
                      Get in touch
                    </button>
                  </div>
                </div>
              </div>
              <LazyLoad once placeholder={<div className="imgBanner"></div>}>
                <img
                  src={lap}
                  alt="banner"
                  loading="lazy"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-once="true"
                />
              </LazyLoad>
            </div>
          </div>
        </div>
      </CustomSlider>
      <Popup Open={valid} Close={setValid} email={email} setEmail={setEmail} />
    </div>
  );
};

export default BannerSlider;
