import React, { useState } from "react";
import Footer from "../../Footer";
import NavBar from "../../Navbar";
import Sidebar from "../../Sidebar";
import { ServicesContainer } from "./ServicesElements";

function Services() {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <NavBar toggle={toggle} />

      <ServicesContainer></ServicesContainer>
      <Footer />
    </>
  );
}

export default Services;
