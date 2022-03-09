import React, { useState } from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";
import useWindowSize from "./useWindowSize";
import Ham from "./Hamburger";
import XHam from "./Xham";
import logo from "../images/logo.png";
import { NavHashLink } from "react-router-hash-link";

const NewHeader = () => {
  const [width] = useWindowSize();
  const [isActive, setActive] = useState(false);
  const side = isActive ? "side active" : "side";
  return (
    <div className="new">
      {width < 1020 ? (
        <>
          <div className="header">
            <nav className="container-fullnav">
              <div className="nav-image">
                <NavHashLink to="/#top" onClick={() => setActive(false)}>
                  <img src={logo} alt="logo" />
                  {/* <h2 className="logo">SL Technologies</h2> */}
                </NavHashLink>
              </div>
            </nav>
            <div className="end">
              <a href="tel:+919372705287" className="btn">
                Call Us
              </a>
              <div className="nav-links">
                {isActive ? (
                  <>
                    <XHam
                      ClickHandle={() => {
                        setActive(!isActive);
                      }}
                    />
                  </>
                ) : (
                  <Ham
                    ClickHandle={() => {
                      setActive(!isActive);
                    }}
                  />
                )}
              </div>
            </div>
          </div>
          <div className={side}>
            <div className="container">
              {/* <li>
                <NavHashLink
                  to="/#top"
                  className="navfade"
                  onClick={() => setActive(false)}
                >
                  Home
                </NavHashLink>
              </li> */}
              <li>
                <NavHashLink
                  to="/#top"
                  className="navfade"
                  onClick={() => setActive(false)}
                  exact
                >
                  Home
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  to="/Service"
                  className="navfade"
                  onClick={() => setActive(false)}
                >
                  Services
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  to="/Client"
                  className="navfade"
                  onClick={() => setActive(false)}
                >
                  Clients
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  to="/Client"
                  className="navfade"
                  onClick={() => setActive(false)}
                >
                  Careers
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  to="/About#top"
                  className="navfade"
                  onClick={() => setActive(false)}
                >
                  About Us
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  to="/#contacts"
                  className="btn"
                  onClick={() => {
                    setActive(false);
                    sessionStorage.setItem("utm_content", `Contact Form`);
                  }}
                >
                  Contact Us
                </NavHashLink>
              </li>
            </div>
          </div>{" "}
        </>
      ) : (
        <>
          <div className="container">
            <NavLink to="/#top" className="logo">
              <img src={logo} alt="logo" />
              {/* <h2 className="logo">SL Technologies</h2> */}
            </NavLink>
            <div className="navDetails">
              <NavHashLink
                to="/#top"
                activeStyle={{ color: "#FFDD28", fontWeight: "bold" }}
                className="navfade"
                exact
              >
                Home
              </NavHashLink>
              <NavHashLink
                to="/Service#top"
                activeStyle={{ color: "#FFDD28", fontWeight: "bold" }}
                className="navfade"
              >
                Services
              </NavHashLink>
              <NavHashLink
                to="/Client#top"
                activeStyle={{ color: "#FFDD28", fontWeight: "bold" }}
                className="navfade"
              >
                Clients
              </NavHashLink>
              <NavHashLink
                to="/Client#top"
                activeStyle={{ color: "#FFDD28", fontWeight: "bold" }}
                className="navfade"
              >
                Careers
              </NavHashLink>
              <NavHashLink
                to="/About#top"
                activeStyle={{ color: "#FFDD28", fontWeight: "bold" }}
                className="navfade"
              >
                About Us
              </NavHashLink>
              <NavHashLink
                to="/Contact#top"
                activeStyle={{ color: "#FFDD28", fontWeight: "bold" }}
                className="btn"
              >
                Contact Us
              </NavHashLink>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NewHeader;
