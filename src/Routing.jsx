import React from "react";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ServiceMain from "./Components/Service/ServiceMain";
import AboutMain from "./Components/About/AboutMain";

const Routing = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/Sl-Tech" exact component={App} />
          <Route path="/Service" exact component={ServiceMain} />
          <Route path="/About" exact component={AboutMain} />
        </Switch>
      </>
    </Router>
  );
};

export default Routing;
