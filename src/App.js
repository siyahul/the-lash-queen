import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home/index";
import Services from "./Components/Pages/Services";
import ContactUs from "./Components/Pages/ContactUs";
import ImageGallery from "./Components/Pages/ImageGallery";

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/gallery">
      <ImageGallery />
    </Route>

      <Route path="/contactus">
          <ContactUs />
        </Route>
      <Route path="/services">
          <Services />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
