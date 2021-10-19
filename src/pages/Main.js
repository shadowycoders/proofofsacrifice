import React from "react";
import Navbar from "../components/Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Main() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch><Route path="/Home" exact component={Home} /></Switch>
      </Router>
    </>
  );
}

export default Main;
