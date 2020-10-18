import React, { useState,memo } from "react";
import Footer from "../../Footer";
import NavBar from "../../Navbar";
import Sidebar from "../../Sidebar";
import {
  ContactUsBg,
  ContactUsContainer,
  ContactUsH1,
} from "./ContactUsElements";

function ContactUs() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <NavBar toggle={toggle} />
      <ContactUsBg>
        <ContactUsContainer>
          <ContactUsH1>Contact Us</ContactUsH1>
        </ContactUsContainer>
      </ContactUsBg>
      <Footer />
    </>
  );
}

export default memo(ContactUs);
