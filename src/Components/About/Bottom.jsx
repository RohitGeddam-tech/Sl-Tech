import React from "react";
import "./Bottom.scss";
import white from "../../images/arrowRightWhite.png";
import { NavLink } from "react-router-dom";

const Bottom = () => {
  return (
    <>
      <div className="join">
        <div className="container">
          <h1>Want to join the team?</h1>
          <NavLink to={"/Client#top"} className="btn blueBtn">
            View job openings
            <span>
              <img src={white} alt="whiteArrow" />
            </span>
          </NavLink>
        </div>
      </div>
      <div className="view">
        <div className="container">
          <div className="viewLeft">
            <h1>View the team’s services</h1>
            <p>
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document.
            </p>
            <NavLink to={"/Service#top"} className="btn blueBtn">
              View our services
              <span>
                <img src={white} alt="whiteArrow" />
              </span>
            </NavLink>
          </div>
          <div className="viewRight">
            <h1>View the team’s work!</h1>
            <p>
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document.
            </p>
            <NavLink to={"/#top"} className="btn blueBtn">
              View our portfolio
              <span>
                <img src={white} alt="whiteArrow" />
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bottom;
