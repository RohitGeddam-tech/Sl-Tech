import React, { useState, useCallback, useEffect } from "react";
import address from "../images/location.svg";
import mail from "../images/email.svg";
import call from "../images/call1.svg";
import scroll from "../images/scroll.svg";
import "./Footer.scss";
import Popup from "../Components/Modal";
import Aos from "aos";
// import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [valid, setValid] = useState(false);
  // const [hover, setHover] = useState(false);

  const colorRef = React.useRef(null);

  const isInView = () => {
    const rect = window.pageYOffset;
    return rect >= 150;
  };

  const [inView, setInView] = useState(false);

  const scrollHandler = useCallback(() => {
    setInView(isInView());
  }, []);

  useEffect(() => {
    setInView(isInView());
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

  // const cssColor = inView ? "Appcolor" : "App";

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
  React.useEffect(() => {
    Aos.init({ duration: 500 });
  });

  return (
    <div className="footer">
      <img
        src={scroll}
        ref={colorRef}
        className={`${inView ? "disp" : "nodisp"}`}
        alt="scrollToTop"
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          width: "auto",
          height: "auto",
          cursor: "pointer",
        }}
        // className="btn"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
      <div className="container">
        <div
          className="boxa"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <h2>Want to talk business?</h2>
          <div className="touch">
            <div className={`textInput ${invalid ? "errorInput" : ""}`}>
              <input
                className="input"
                id="contact"
                value={email}
                type="email"
                name="email"
                pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$"
                required
                onChange={handleChange}
              />
              <label htmlFor="email">
                Enter your email address <span style={{ color: "red" }}>*</span>
              </label>
              {invalid ? (
                <p className="error-text">
                  We will need your email address to get in touch
                </p>
              ) : null}
            </div>
            <button className="btn" onClick={handleSubmit}>
              Get in touch
            </button>
          </div>
        </div>
        <div
          className="boxb"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <h2>You can directly reach out to us at :</h2>
          <a
            href="mailto:contact@sugarlogger.com"
            className="box"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={mail} alt="mail" />
            <div className="data">
              <p>contact@sugarlogger.com</p>
            </div>
          </a>
          <a
            href="tel:+919372705287"
            className="box"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={call} alt="call" />
            <div className="data">
              <p>IND: +91 93727 05287</p>
            </div>
          </a>
          <a
            href="https://goo.gl/maps/Vx76H45CFb1Wriou6"
            className="box"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={address} alt="address" />
            <div className="data">
              <p>
                Kanakia Zillion, 205 & 206, 2nd Floor, B Wing, LBS Rd, Kurla
                West, Mumbai, Maharashtra 400070
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className="footerMenu">
        <div className="container">
          <p>© Sugarlogger Technologies Pvt. Ltd.</p>
          <div className="footNav">
            <NavHashLink to="/About#top">About Us</NavHashLink>
            <NavHashLink to="/Service#top">Our Services</NavHashLink>
            {/* <a href="/">Our Careers</a> */}
            <NavHashLink to="/Client#top">Our Clients</NavHashLink>
            <NavHashLink to="/login#top">Privacy Policy</NavHashLink>
          </div>
        </div>
      </div>
      <Popup Open={valid} Close={setValid} email={email} setEmail={setEmail} />
    </div>
  );
};

export default Footer;
