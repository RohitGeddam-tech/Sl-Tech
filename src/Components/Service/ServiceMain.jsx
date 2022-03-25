import React from "react";
import Footer from "../../layout/Footer";
import NewHeader from "../../layout/NewHeader";
import Banner from "./BannerServ";
import ServiceBody from "./ServiceBody";
import Tech from "./Tech";

const ServiceMain = () => {
  React.useEffect(() => {
    if (!window.location.href.includes("#")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);
  return (
    <>
      <NewHeader />
      <div style={{ paddingTop: "65px" }}>
        <Banner />
        <ServiceBody />
        <Tech />
      </div>
      <Footer />
    </>
  );
};

export default ServiceMain;
