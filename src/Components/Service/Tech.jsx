import React, { useState } from "react";
import strapi from "../../images/strapi.png";
import shop from "../../images/shop.png";
import word from "../../images/word.png";
import react from "../../images/react.png";
import php from "../../images/php.png";
import pro from "../../images/pro.png";
import photoshop from "../../images/photoshop.png";
import adobe from "../../images/adobe.png";
import effects from "../../images/effects.png";
import ill from "../../images/ill.png";
import figma from "../../images/figma.png";
import "./Tech.scss";
import Aos from "aos";
// import LazyLoad from "react-lazyload";

const data = [
  {
    label: "design",
    value: [
      {
        img: photoshop,
        text: "Photoshop",
      },
      {
        img: adobe,
        text: "Adobe XD",
      },
      {
        img: ill,
        text: "Illustrator",
      },
      {
        img: figma,
        text: "Figma",
      },
      {
        img: pro,
        text: "Premier Pro",
      },
      {
        img: effects,
        text: "After Effects",
      },
    ],
  },
  {
    label: "develop",
    value: [
      {
        img: react,
        text: "ReactJS",
      },
      {
        img: php,
        text: "PHP",
      },
      {
        img: shop,
        text: "Shopify",
      },
      {
        img: strapi,
        text: "Strapi",
      },
      {
        img: word,
        text: "Wordpress",
      },
    ],
  },
];

const Tech = () => {
  const [skills, setSkills] = useState("design");
  React.useEffect(() => {
    Aos.init({ duration: 500 });
  });
  return (
    <div className="tech">
      <div className="container">
        <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          Our Technology Stack
        </h2>
        <div
          className="techHead"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="blockTech">
            <button
              className={skills === "design" ? "tabs a activeTab" : "tabs a"}
              onClick={() => setSkills("design")}
            >
              <span>Design & Animation</span>
            </button>
            <button
              className={skills === "develop" ? "tabs b activeTab" : "tabs b"}
              onClick={() => setSkills("develop")}
            >
              <span>Development</span>
            </button>
          </div>
          <div className="divider"></div>
        </div>
        <div
          className="contentTabs"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          {data.map(({ label, value }) => (
            <div
              className={`content ${label === skills && "active"}`}
              key={label}
            >
              {/* <div className="detailBox"> */}
              {value.map((doc, i) => (
                <div className="allDetails" key={i}>
                  {/* <LazyLoad
                    once
                    placeholder={<div className="imgBanner"></div>}
                  > */}
                  <img src={doc.img} alt={doc.text} />
                  {/* </LazyLoad> */}
                  <p>{doc.text}</p>
                </div>
              ))}
              {/* </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tech;
