import React from "react";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ServiceMain from "./Components/Service/ServiceMain";
import AboutMain from "./Components/About/AboutMain";
import Career from "./Components/Career/Career";
import ClientMain from "./Components/Client/ClientMain";

const Routing = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/Sl-Tech" exact component={App} />
          <Route path="/Service" component={ServiceMain} />
          <Route path="/About" component={AboutMain} />
          <Route path="/Career" component={Career} />
          <Route path="/Client" component={ClientMain} />
        </Switch>
      </>
    </Router>
  );
};

export default Routing;
