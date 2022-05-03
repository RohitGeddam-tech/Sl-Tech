import React from "react";
import "./BannerAbout.scss";
// import banner from "../../images/aboutBan.png";
// import banner from "../../images/aboutBanner.png";
import banner from "../../images/aboutBanner.webp";
import Aos from "aos";
import "aos/dist/aos.css";
import LazyLoad from "react-lazyload";

const BannerAbout = () => {
  React.useEffect(() => {
    Aos.init({ duration: 500 });
  });
  return (
    <div className="bannerChild">
      <div className="container">
        <div
          className="bannerBox"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <span>ABOUT US</span>
          {/* <h1>We are a technology driven company</h1> */}
          <h1>Driven to be Authentic. Passionate about Technology</h1>
          <p>
            {/* Setting up an online presence does not happen overnight. We help you
            adopt the right strategies & digital platforms to build an effective
            online presence. */}
            What you see is what you get, an honest technology company that
            never overpromises or underdelivers.
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

export default BannerAbout;
