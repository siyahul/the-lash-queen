import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home/index";
import Services from "./Components/Pages/Services";
import ContactUs from "./Components/Pages/ContactUs";
import ImageGallery from "./Components/Pages/ImageGallery";
import Admin from "./Components/Pages/Admin";
import Images from "./Components/Pages/Admin/ManageImages";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/admin/images">
            <Images />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
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
    </div>
  );
}

export default App;
