import React from "react";
import data from "./TeamData";
import "./Team.scss";

const Team = () => {
  return (
    <div className="team">
      <div className="container">
        <h1>Meet the team</h1>
        <p>
          This is our talented team of creative people, managers, and technology
          experts.
        </p>
        <div className="allTeam">
          {data.map((doc) => (
            <div className={`teamBox ${doc.name}`} key={doc.name}>
              <img src={doc.img} alt={doc.name} />
              <h1>{doc.name}</h1>
              <span>{doc.title}</span>
              <p>{doc.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
