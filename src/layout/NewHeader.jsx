import React, { useState } from "react";
import "./Nav.scss";
// import { NavLink } from "react-router-dom";
import useWindowSize from "./useWindowSize";
import Ham from "./Hamburger";
import XHam from "./Xham";
import logo from "../images/logo.png";
import { NavHashLink } from "react-router-hash-link";

const NewHeader = () => {
  const [width] = useWindowSize();
  const [start, setStart] = useState(false);
  const [state, setState] = useState(false);
  const side = start ? "side active" : "side";

  React.useEffect(() => {
    var parts = window.location.href.split("/");
    var lastSegment = parts.pop() || parts.pop();
    // console.log(lastSegment);
    if (lastSegment === "#top" || lastSegment === "") {
      setState(true);
    } else {
      setState(false);
    }
  }, []);

  return (
    <div className="new">
      {width < 1020 ? (
        <>
          <div className="header">
            <nav className="container-fullnav">
              <div className="nav-image">
                <NavHashLink to="/" onClick={() => setStart(false)}>
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
                {start ? (
                  <>
                    <XHam
                      ClickHandle={() => {
                        setStart(!start);
                      }}
                    />
                  </>
                ) : (
                  <Ham
                    ClickHandle={() => {
                      setStart(!start);
                    }}
                  />
                )}
              </div>
            </div>
          </div>
          <div className={side}>
            <div className="container">
              <li>
                <NavHashLink
                  to="/"
                  // className="navfade"
                  className={`navfade ${state ? "active" : ""}`}
                  onClick={() => setStart(false)}
                >
                  Home
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  to="/Service"
                  className={`navfade ${
                    window.location.href.includes("Service") ? "active" : ""
                  }`}
                  onClick={() => setStart(false)}
                >
                  Services
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  to="/Client"
                  className={`navfade ${
                    window.location.href.includes("Client") ? "active" : ""
                  }`}
                  onClick={() => setStart(false)}
                >
                  Clients
                </NavHashLink>
              </li>
              {/* <li>
                <NavHashLink
                  to="/Career"
                  className={`navfade ${
                    window.location.href.includes("Career") ? "active" : ""
                  }`}
                  onClick={() => setStart(false)}
                >
                  Careers
                </NavHashLink>
              </li> */}
              <li>
                <NavHashLink
                  to="/About"
                  className={`navfade ${
                    window.location.href.includes("About") ? "active" : ""
                  }`}
                  onClick={() => setStart(false)}
                >
                  About Us
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  to="/#contact"
                  className="btn"
                  onClick={() => {
                    setStart(false);
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
            <NavHashLink to="/" className="logo">
              <img src={logo} alt="logo" />
              {/* <h2 className="logo">SL Technologies</h2> */}
            </NavHashLink>
            <div className="navDetails">
              <NavHashLink
                to="/"
                activeStyle={{ color: "#FFDD28", fontWeight: "bold" }}
                // className="navfade"
                className={`navfade ${state ? "active" : ""}`}
              >
                Home
              </NavHashLink>
              <NavHashLink
                to="/Service"
                // activeStyle={{ color: "#FFDD28", fontWeight: "bold" }}
                className={`navfade ${
                  window.location.href.includes("Service") ? "active" : ""
                }`}
              >
                Services
              </NavHashLink>
              <NavHashLink
                to="/Client"
                // activeStyle={{ color: "#FFDD28", fontWeight: "bold" }}
                // className="navfade"
                className={`navfade ${
                  window.location.href.includes("Client") ? "active" : ""
                }`}
              >
                Clients
              </NavHashLink>
              {/* <NavHashLink
                to="/Career"
                // activeStyle={{ color: "#FFDD28", fontWeight: "bold" }}
                // className="navfade"
                className={`navfade ${
                  window.location.href.includes("Career") ? "active" : ""
                }`}
              >
                Careers
              </NavHashLink> */}
              <NavHashLink
                to="/About"
                // activeStyle={{ color: "#FFDD28", fontWeight: "bold" }}
                // className="navfade"
                className={`navfade ${
                  window.location.href.includes("About") ? "active" : ""
                }`}
              >
                About Us
              </NavHashLink>
              <NavHashLink
                to="/#contact"
                // activeStyle={{ color: "#FFDD28", fontWeight: "bold" }}
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
