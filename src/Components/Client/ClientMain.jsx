import "./App.scss";
import Footer from "../../layout/Footer";
import NewHeader from "../../layout/NewHeader";
import Client from "./Client";
import React from "react";

function ClientMain() {
  React.useEffect(() => {
    if (!window.location.href.includes("contact")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);
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
