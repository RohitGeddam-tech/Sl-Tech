import React, { useState } from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";
import useWindowSize from "./useWindowSize";
import Ham from "./Hamburger";
import XHam from "./Xham";
import logo from "../images/logo.png";

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
                <NavLink to="/#top" onClick={() => setActive(false)}>
                  <img src={logo} alt="logo" />
                  {/* <h2 className="logo">SL Technologies</h2> */}
                </NavLink>
              </div>
            </nav>
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
                <NavLink
                  to="/#top"
                  className="navfade"
                  onClick={() => setActive(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Service"
                  className="navfade"
                  onClick={() => setActive(false)}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Client"
                  className="navfade"
                  onClick={() => setActive(false)}
                >
                  Clients
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/About#top"
                  className="navfade"
                  onClick={() => setActive(false)}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/#contacts"
                  className="btn"
                  onClick={() => {
                    setActive(false);
                    sessionStorage.setItem("utm_content", `Contact Form`);
                  }}
                >
                  Contact Us
                </NavLink>
              </li>
            </div>
          </div>{" "}
        </>
      ) : (
        <>
          <div className="container">
            <NavLink to="/#top" className="logo" onClick={() => setActive(false)}>
              <img src={logo} alt="logo" onClick={() => setActive(false)} />
              {/* <h2 className="logo">SL Technologies</h2> */}
            </NavLink>
            <div className="navDetails">
              <NavLink
                to="/#top"
                activeStyle={{ color: "#FFDD28", fontWeight: "bold" }}
                className="navfade"
                onClick={() => setActive(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/Service#top"
                activeStyle={{ color: "#FFDD28", fontWeight: "bold" }}
                className="navfade"
                onClick={() => setActive(false)}
              >
                Services
              </NavLink>
              <NavLink
                to="/Client#top"
                activeStyle={{ color: "#FFDD28", fontWeight: "bold" }}
                className="navfade"
                onClick={() => setActive(false)}
              >
                Clients
              </NavLink>
              <NavLink
                to="/About#top"
                activeStyle={{ color: "#FFDD28", fontWeight: "bold" }}
                className="navfade"
                onClick={() => setActive(false)}
              >
                About Us
              </NavLink>
              <NavLink
                to="/Contact#top"
                activeStyle={{ color: "#FFDD28", fontWeight: "bold" }}
                className="btn"
                onClick={() => setActive(false)}
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NewHeader;
