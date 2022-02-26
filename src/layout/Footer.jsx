import React, { useState } from "react";
import address from "../images/location.svg";
import mail from "../images/email.svg";
import call from "../images/call1.svg";
import "./Footer.scss";
import Popup from "../Components/Modal";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [valid, setValid] = useState(false);
  // const [hover, setHover] = useState(false);
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
      setEmail("");
    }
  };
  return (
    <div className="footer">
      <div className="container">
        <div className="boxa">
          <h2>Want to talk business?</h2>
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
        <div className="boxb">
          <h2>You can directly reach out to us at :</h2>
          <a href="mailto:contact@sugarlogger.com" className="box">
            <img src={mail} alt="mail" />
            <div className="data">
              <p>contact@sugarlogger.com</p>
            </div>
          </a>
          <a href="tel:+919372705287" className="box">
            <img src={call} alt="call" />
            <div className="data">
              <p>IND: +91 93727 05287</p>
            </div>
          </a>
          <a href="https://goo.gl/maps/Vx76H45CFb1Wriou6" className="box">
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
            <a href="/">About Us</a>
            <a href="/">Our Services</a>
            <a href="/">Our Clients</a>
            <a href="/">Privacy Policy</a>
          </div>
        </div>
      </div>
      {/* <div
        className="down"
        style={{ backgroundColor: "#eaedf1", padding: "11px 0" }}
      >
        <p>
          Website by{" "}
          <a href="https://tech.sugarlogger.com/">
            Sugarlogger Technologies Pvt. Ltd.
          </a>
        </p>
      </div> */}
      <Popup Open={valid} Close={setValid} />
    </div>
  );
};

export default Footer;
