import React, { useCallback, useEffect, useState, useRef } from "react";

const ServiceComp = ({
  className,
  image,
  title,
  valueTitle,
  valueText,
  valueTitle1,
  valueTitle2,
  valueTitle3,
}) => {
  const refer = useRef(null);

  const isInView = () => {
    const refer = window.pageYOffset;
    return refer >= 410 && refer <= 810;
  };

  const [inView, setInView] = useState(false);

  const scrollHandler = useCallback(() => {
    setInView(isInView());
    // setInView(isView());
  }, []);

  useEffect(() => {
    setInView(isInView());
    // setInView(isView());
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

  const cssFix = inView ? "fix" : "";
  const cssFixed = inView ? "fixed a" : "";

  return (
    <div className="fullBody" >
      <div className={`bodyLeft ${cssFix}`}>
        <div className="imgClass">
          <img src={image} alt={title} />
          <p className={title}>{title}</p>
        </div>
      </div>
      <div className="bodyRight">
        <div className="bodyDetails">
          <div className={`bodyBox ${valueTitle}`}>
            <h1>{valueTitle}</h1>
            <p>{valueText}</p>
          </div>
          <div className={`bodyBox ${valueTitle}`}>
            <h1>{valueTitle1}</h1>
            <p>{valueText}</p>
          </div>
        </div>
        {valueTitle2.length > 1 ? (
          <div className="bodyDetails a">
            <div className={`bodyBox`}>
              <h1>{valueTitle2}</h1>
              <p>{valueText}</p>
            </div>
            <div className={`bodyBox`}>
              <h1>{valueTitle3}</h1>
              <p>{valueText}</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ServiceComp;
