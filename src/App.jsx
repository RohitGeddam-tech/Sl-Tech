import "./App.scss";
import React from "react";
import BannerSlider from "./Components/Banner";
import Client from "./Components/Client";
import Service from "./Components/Service";
// import Test from "./Components/Test";
import Testimonial from "./Components/Testimonial";
import Footer from "./layout/Footer";
import NewHeader from "./layout/NewHeader";

function App() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="App">
      <NewHeader />
      <div style={{ paddingTop: "65px" }}>
        <BannerSlider />
        <Service />
        <Client />
        {/* <Test /> */}
        <Testimonial />
      </div>
      <Footer />
    </div>
  );
}

export default App;
