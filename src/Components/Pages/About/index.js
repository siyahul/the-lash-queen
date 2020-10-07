import React, { useState } from "react";
import Footer from "../../Footer";
import NavBar from "../../Navbar";
import Sidebar from "../../Sidebar";
import { AboutContainer } from "./AboutElements";

function About() {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <NavBar toggle={toggle} />

      <AboutContainer></AboutContainer>
      <Footer />
    </>
  );
}

export default About;
