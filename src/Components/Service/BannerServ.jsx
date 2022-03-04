import React from "react";
import "./BannerServ.scss";
import banner from "../../images/service.png";

const BannerServ = () => {
  return (
    <div className="bannerChild">
      <div className="container">
        <div className="bannerBox">
          <span>SERVICES</span>
          <h1>This is where we shine!</h1>
          <p>
            Setting up an online presence does not happen overnight. We help you
            adopt the right strategies & digital platforms to build an effective
            online presence.
          </p>
          <div className="bottom">
            <a href="#bannerCta" className="btn">Get in touch</a>
          </div>
        </div>
        <img src={banner} alt="banner" />
      </div>
    </div>
  );
};

export default BannerServ;
