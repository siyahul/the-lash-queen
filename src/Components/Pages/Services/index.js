import React, { useState } from "react";
import Footer from "../../Footer";
import NavBar from "../../Navbar";
import Sidebar from "../../Sidebar";
import { ServicesBg, ServicesContainer, ServicesH1 } from "./ServicesElements";

function Services() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <NavBar toggle={toggle} />
      <ServicesBg>
        <ServicesContainer>
          <ServicesH1>Services</ServicesH1>
        </ServicesContainer>
      </ServicesBg>

      <Footer />
    </>
  );
}

export default Services;
