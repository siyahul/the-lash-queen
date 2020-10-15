import React, { useState } from "react";
import Footer from "../../Footer";
import NavBar from "../../Navbar";
import Sidebar from "../../Sidebar";
import {
  ServiceBg,
  ServiceContainer,
  ServiceH1Container,
  ServiceH1,
  ServicePara,
  ServiceSpan,
  ServiceH2,
  ServiceUlContainer,
  ServicesUl,
  ServicesLi,
  ServiceLink,
} from "./ServicesElements";

function Services() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <NavBar toggle={toggle} />
      <ServiceBg>
        <ServiceContainer>
          <ServiceH1Container>
            <ServiceH1>Services</ServiceH1>
          </ServiceH1Container>
          <ServicePara>
            We offer all kinds of make-up services and make-up courses
          </ServicePara>
          <ServiceH1Container>
            <ServiceH2>Make-up courses -</ServiceH2>
          </ServiceH1Container>
          <ServiceUlContainer>
            <ServicesUl>
              <ServicesLi>Make-up professional course</ServicesLi>
              <ServicesLi>Make-up Diploma course</ServicesLi>
              <ServicesLi>Make-up Advanced course</ServicesLi>
              <ServiceLink to="/contactUs"><ServiceSpan>For more information ContactUs on instagram or call </ServiceSpan></ServiceLink>
              </ServicesUl>
                  
          </ServiceUlContainer>
          <ServiceH1Container>
            <ServiceH2>Make-up Services -</ServiceH2>
          </ServiceH1Container>
          <ServiceUlContainer>
            <ServicesUl>
              <ServicesLi>Bridal Makeup</ServicesLi>
              <ServicesLi>Bridal Makeup</ServicesLi>
            </ServicesUl>
          </ServiceUlContainer>
        </ServiceContainer>
      </ServiceBg>

      <Footer />
    </>
  );
}

export default Services;
