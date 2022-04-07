import React from "react";
import data from "./TeamData";
import "./Team.scss";
import Aos from "aos";
import LazyLoad from "react-lazyload";

const Team = () => {
  React.useEffect(() => {
    Aos.init({ duration: 500 });
  });
  return (
    <div className="team">
      <div
        className="container"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          Meet the team
        </h1>
        <p data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          This is our talented team of creative people, managers, and technology
          experts.
        </p>
        <div className="allTeam">
          {data.map((doc) => (
            <div
              className={`teamBox ${doc.name}`}
              key={doc.name}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <LazyLoad once placeholder={<div className="imgBanner"></div>}>
                <img src={doc.img} alt={doc.name} />
              </LazyLoad>
              <h1>{doc.name}</h1>
              <span>{doc.title}</span>
              {/* <p>{doc.text}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
