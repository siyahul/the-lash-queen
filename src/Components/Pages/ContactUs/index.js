import React, { useState, memo } from "react";
import Footer from "../../Footer";
import NavBar from "../../Navbar";
import Sidebar from "../../Sidebar";
import NavigationIcon from "@material-ui/icons/Navigation";
import {
  ContactUsBg,
  ContactUsContainer,
  ContactUsH1,
  ContactUsP,
  A,
  Span,
} from "./ContactUsElements";
import { useHistory } from "react-router-dom";

function ContactUs() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const history = useHistory();

  return (
    <>
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <NavBar toggle={toggle} />
      <ContactUsBg>
        <ContactUsContainer>
          <ContactUsH1>Contact Us</ContactUsH1>
          <ContactUsP>
            Contact us on <br />
            <Span>
              <A href="https://www.instagram.com/thelashqueenstudio">
                Instagram
              </A>
              ,<A href="#">Facebook</A>,<A href="tel:+918089459350">Call</A>
            </Span>
            <br />
            Navigate to --
            <br />
            <Span>
              <A
                onClick={() => {
                  history.push("/");
                }}
              >
                The Lash Queen Studio
              </A>
              <br />
              2nd floor, R.J building,
              <br />
              Ragavan pillai road,
              <br />
              elamakkara,
              <br />
              Kaloor, cochin-682026
            </Span>
            <br />
            <A href="https://www.google.com/maps/dir//10.0192174,76.2934997/@10.0192264,76.2932502,21z/data=!4m2!4m1!3e3?hl=en">
              Navigate to us with google maps
              <NavigationIcon />
            </A>
          </ContactUsP>
          <ContactUsP></ContactUsP>
        </ContactUsContainer>
      </ContactUsBg>
      <Footer />
    </>
  );
}

export default memo(ContactUs);
