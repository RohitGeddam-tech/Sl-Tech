import React from "react";
import "./BannerServ.scss";
// import banner from "../../images/service.png";
import banner from "../../images/service.webp";
import Aos from "aos";
import "aos/dist/aos.css";
import LazyLoad from "react-lazyload";

const BannerServ = () => {
  React.useEffect(() => {
    Aos.init({ duration: 500 });
  });
  return (
    <div className="bannerServ">
      <div className="container">
        <div
          className="bannerBox"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <span>SERVICES</span>
          <h1>This is where we shine!</h1>
          <p>
            {/* Setting up an online presence does not happen overnight. We help you
            adopt the right strategies & digital platforms to build an effective
            online presence. */}
            These are a few of the weapons in our "arsenal" to put your best
            foot forward online
          </p>
          <div className="bottom">
            <a href="#contact" className="btn">
              Get in touch
            </a>
          </div>
        </div>
        <LazyLoad once placeholder={<div className="imgBanner"></div>}>
          <img
            src={banner}
            alt="banner"
            loading="lazy"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-once="true"
          />
        </LazyLoad>
      </div>
    </div>
  );
};

export default BannerServ;
