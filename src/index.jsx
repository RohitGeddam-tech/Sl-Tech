import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./Routing";
import "aos/dist/aos.css";
import smoothscroll from "smoothscroll-polyfill";

// kick off the polyfill!
smoothscroll.polyfill();

ReactDOM.render(<App />, document.getElementById("root"));
