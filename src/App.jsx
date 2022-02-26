import "./App.scss";
import BannerSlider from "./Components/Banner";
import Client from "./Components/Client";
import Service from "./Components/Service";
// import Test from "./Components/Test";
import Testimonial from "./Components/Testimonial";
import Footer from "./layout/Footer";
import NewHeader from "./layout/NewHeader";

function App() {
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
