import "./App.scss";
import BannerSlider from "../Banner";
import Client from "../Client";
import Service from "../Service";
// import Test from "./Components/Test";
import Testimonial from "../Testimonial";
import Footer from "../../layout/Footer";
import NewHeader from "../../layout/NewHeader";

function Career() {
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

export default Career;
