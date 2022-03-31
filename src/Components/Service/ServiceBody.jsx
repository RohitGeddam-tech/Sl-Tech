import React from "react";
import "./ServiceBody.scss";
import data from "./Data";

const ServiceBody = () => {
  return (
    <div className="servBody">
      <div className="container">
        {data.map((doc, i) => (
          <div
            className="fullBody"
            key={i}
            id={
              doc.title === "Social Media Marketing"
                ? "socialmedia"
                : doc.title.replace(" ", "").toLowerCase()
            }
          >
            <div className="bodyLeft">
              <div className="imgClass">
                <img src={doc.img} alt={doc.title} />
                <p className={doc.title}>{doc.title}</p>
              </div>
            </div>
            <div className="bodyRight">
              <div className="bodyDetails">
                {doc.details.map((val,i) => (
                  <>
                    <div className={`bodyBox ${val.title}`} key={i}>
                      <h1>{val.title}</h1>
                      <p>{val.text}</p>
                    </div>
                  </>
                ))}
              </div>
              {doc.details1.length > 0 ? (
                <div className="bodyDetails a">
                  {doc.details1.map((val, i) => (
                    <>
                      <div className={`bodyBox`} key={i}>
                        <h1>{val.title}</h1>
                        <p>{val.text}</p>
                      </div>
                    </>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceBody;
