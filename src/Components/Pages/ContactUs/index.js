import React, { useState } from "react";
import Footer from "../../Footer";
import NavBar from "../../Navbar";
import Sidebar from "../../Sidebar";
import { ContactUsContainer } from "./ContactUsElements";

function ContactUs() {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <NavBar toggle={toggle} />

      <ContactUsContainer></ContactUsContainer>
      <Footer />
    </>
  );
}

export default ContactUs;
