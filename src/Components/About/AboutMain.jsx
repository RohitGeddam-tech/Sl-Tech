import React from "react";
import Footer from "../../layout/Footer";
import NewHeader from "../../layout/NewHeader";
import Banner from "./BannerAbout";
import Bottom from "./Bottom";
import Team from "./Team";
import Vision from "./Vision";

const AboutMain = () => {
  React.useEffect(() => {
    if (!window.location.href.includes("contact")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);
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
