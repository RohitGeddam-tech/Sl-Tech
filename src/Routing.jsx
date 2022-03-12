import React from "react";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServiceMain from "./Components/Service/ServiceMain";
import AboutMain from "./Components/About/AboutMain";
import Career from "./Components/Career/Career";
import ClientMain from "./Components/Client/ClientMain";
import Login from "./Login";
import Backend from "./Backend";

const Routing = () => {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" exact element={<App animate={true} />} />
          <Route path="/Sl-Tech" exact element={<App animate={true} />} />
          <Route path="/Service" element={<ServiceMain animate={true} />} />
          <Route path="/About" element={<AboutMain animate={true} />} />
          <Route path="/Career" element={<Career animate={true} />} />
          <Route path="/Client" element={<ClientMain animate={true} />} />
          <Route path="/login" element={<Login animate={true} />} />
          <Route path="/admin" element={<Backend animate={true} />} />
        </Routes>
      </>
    </Router>
  );
};

export default Routing;
