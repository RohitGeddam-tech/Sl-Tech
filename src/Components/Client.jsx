import React from "react";
import white from "../images/arrowRightWhite.png";
import docbel from "../images/docbel.png";
import mirana from "../images/mirana.png";
import shycosafe from "../images/shycosafe.png";
import rnr from "../images/rnr.png";
import "./Client.scss";

const Client = () => {
  return (
    <div className="client">
      <div className="container">
        <h2>Our Clients</h2>
        <p>View some of our latest work</p>
        <div className="clientDetails">
          <div className="clientBox">
            <img src={docbel} alt="Docbel Health" />
            <h3>Docbel Health</h3>
            <p>
              End to end e-commerce setup for Docbel Health on the Shopify
              platform.
            </p>
          </div>
          <div className="clientBox">
            <img src={mirana} alt="Mirana Resort" />
            <h3>Mirana Resort</h3>
            <p>
              Complete web design and development for a paradise resort in
              Alibaug.
            </p>
          </div>
        </div>
        <div className="clientDetails">
          <div className="clientBox">
            <img src={shycosafe} alt="Shycosafe" />
            <h3>Shycosafe</h3>
            <p>
              A portfolio landing page for stands & accessories provider
              Shycosafe.
            </p>
          </div>
          <div className="clientBox">
            <img src={rnr} alt="Blogs - Research & Ranking" />
            <h3>Blogs - Research & Ranking</h3>
            <p>
              Blog setup and integration for the fintech firm, powered by
              Wordpress.
            </p>
          </div>
        </div>
        <div className="bottom">
          <button className="btn blueBtn">
            View entire portfolio{" "}
            <span>
              <img src={white} alt="whiteArrow" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Client;
