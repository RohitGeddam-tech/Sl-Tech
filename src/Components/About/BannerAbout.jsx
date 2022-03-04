import React from "react";
import "./BannerAbout.scss";
import banner from "../../images/aboutBan.png";

const BannerAbout = () => {
  return (
    <div className="bannerChild">
      <div className="container">
        <div className="bannerBox">
          <span>ABOUT US</span>
          <h1>We are a technology driven company</h1>
          <p>
            Setting up an online presence does not happen overnight. We help you
            adopt the right strategies & digital platforms to build an effective
            online presence.
          </p>
          <div className="bottom">
            <a href="#bannerCta" className="btn">
              Get in touch
            </a>
          </div>
        </div>
        <img src={banner} alt="banner" />
      </div>
    </div>
  );
};

export default BannerAbout;
