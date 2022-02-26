import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderNextArrow from "./NextArrow";
import SliderPrevArrow from "./PrevArrow";

const Custom = ({ children }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    nextArrow: <SliderNextArrow />,
    prevArrow: <SliderPrevArrow />,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 1065,
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>{children}</Slider>
    </>
  );
};

export default Custom;
