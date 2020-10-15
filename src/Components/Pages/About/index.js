import React, { useState } from "react";
import Footer from "../../Footer";
import NavBar from "../../Navbar";
import Sidebar from "../../Sidebar";
import {
  AboutBg,
  AboutContainer,
  AboutH1,
  AboutH1Container,
  AboutPara,
  AboutSpan,
  Video,
} from "./AboutElements";

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
          <AboutH1Container>
            <AboutH1>About Us</AboutH1>
          </AboutH1Container>
          <AboutPara>
            Welcome to the official website of The Lash Queen Saloon and makeup
            academy. with internationally-certified professional bridal make-up
            artists. The Lash Queen provides a host of make-up services and make-up courses.and with
            a pleasure of too many satisfied clients.
            </AboutPara>
            <AboutPara>
            We use only the best make-up brands in the industry such as <AboutSpan>MAC,Anastasia Beverly Hills,Morphe,Huda Beauty,Kiko Milano,Loreal,Kenti Beauty,Boby Brown</AboutSpan>.etc... which are hand picked from the official stores of North anmerica and Europe
            </AboutPara>
          

          <AboutH1Container>
            <AboutH1>Videos</AboutH1>
          </AboutH1Container>
          <Video
            src="https://firebasestorage.googleapis.com/v0/b/the-lash-queen.appspot.com/o/Videos%2Fintro.mp4?alt=media&token=321b62f5-61ac-4831-a902-3e75a07e7a53"
            controls
          />
          <Video
            src="https://firebasestorage.googleapis.com/v0/b/the-lash-queen.appspot.com/o/Videos%2Finnaugration.mp4?alt=media&token=445ed282-2545-40cf-8845-852de200e6ea"
            controls
          />
        </AboutContainer>
      </AboutBg>
      <Footer />
    </>
  );
}

export default About;
