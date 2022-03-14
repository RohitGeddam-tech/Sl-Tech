import "./App.scss";
import Footer from "../../layout/Footer";
import NewHeader from "../../layout/NewHeader";
import Client from "./Client";

function ClientMain() {
  return (
    <div className="App">
      <NewHeader />
      <div style={{ paddingTop: "65px" }}>
        <Client />
        {/* <Test /> */}
      </div>
      <Footer />
    </div>
  );
}

export default ClientMain;
