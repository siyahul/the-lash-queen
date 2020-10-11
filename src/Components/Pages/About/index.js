import React, { useState } from "react";
import Footer from "../../Footer";
import NavBar from "../../Navbar";
import Sidebar from "../../Sidebar";
import { AboutBg, AboutContainer, AboutH1 } from "./AboutElements";

function About() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <NavBar toggle={toggle} />
      <AboutBg>
        <AboutContainer>
          <AboutH1>About Us</AboutH1>
        </AboutContainer>
      </AboutBg>
      <Footer />
    </>
  );
}

export default About;
