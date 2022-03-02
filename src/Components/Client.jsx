import React from "react";
import white from "../images/arrowRightWhite.png";
import docbel from "../images/docbel.webp";
import mirana from "../images/mirana.webp";
import shycosafe from "../images/shycosafe.webp";
import rnr from "../images/rnr.webp";
import "./Client.scss";
import Aos from "aos";
import "aos/dist/aos.css";

const Client = () => {
  React.useEffect(() => {
    Aos.init({ duration: 500 });
  });
  return (
    <div className="client">
      <div className="container">
        <h2 data-aos="fade-up" data-aos-duration="1500">
          Our Clients
        </h2>
        <p data-aos="fade-up" data-aos-duration="1500">
          View some of our latest work
        </p>
        <div className="clientDetails">
          <a
            href="https://www.docbel.in/"
            className="clientBox"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <img src={docbel} alt="Docbel Health" />
            <h3>Docbel Health</h3>
            <p>
              End to end e-commerce setup for Docbel Health on the Shopify
              platform.
            </p>
          </a>
          <a
            href="https://rohitgeddam-tech.github.io/Mirana/"
            className="clientBox"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <img src={mirana} alt="Mirana Resort" />
            <h3>Mirana Resort</h3>
            <p>
              Complete web design and development for a paradise resort in
              Alibaug.
            </p>
          </a>
        </div>
        <div
          className="clientDetails"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <a
            href="http://dev.shycosafe.com/"
            className="clientBox"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <img src={shycosafe} alt="Shycosafe" />
            <h3>Shycosafe</h3>
            <p>
              A portfolio landing page for stands & accessories provider
              Shycosafe.
            </p>
          </a>
          <a
            href="/#top"
            className="clientBox"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <img src={rnr} alt="Blogs - Research & Ranking" />
            <h3>Blogs - Research & Ranking</h3>
            <p>
              Blog setup and integration for the fintech firm, powered by
              Wordpress.
            </p>
          </a>
        </div>
        <div className="bottom" data-aos="fade-up" data-aos-duration="1500">
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
