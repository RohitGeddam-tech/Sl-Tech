import React from "react";
import Footer from "../../layout/Footer";
import NewHeader from "../../layout/NewHeader";
import Banner from "./BannerAbout";
import Bottom from "./Bottom";
import Team from "./Team";
import Vision from "./Vision";

const AboutMain = () => {
  return (
    <>
      <NewHeader />
      <div style={{ paddingTop: "65px" }}>
        <Banner />
        <Vision />
        <Team />
        <Bottom />
      </div>
      <Footer />
    </>
  );
};

export default AboutMain;
