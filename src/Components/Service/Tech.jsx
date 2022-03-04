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
  return (
    <div className="tech">
      <div className="container">
        <h2>Our Technology Stack</h2>
        <div className="techHead">
          <div className="blockTech">
            <button
              className={skills === "design" ? "tabs a activeTab" : "tabs a"}
              onClick={() => setSkills("design")}
            >
              Design & Animation
            </button>
            <button
              className={skills === "develop" ? "tabs b activeTab" : "tabs b"}
              onClick={() => setSkills("develop")}
            >
              Development
            </button>
          </div>
          <div className="divider"></div>
        </div>
        <div className="contentTabs">
          {data.map(({ label, value }) => (
            <div
              className={`content ${label === skills && "active"}`}
              key={label}
            >
              {/* <div className="detailBox"> */}
              {value.map((doc, i) => (
                <div className="allDetails" key={i}>
                  <img src={doc.img} alt={doc.text} />
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
