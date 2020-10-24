import React, { useState, memo } from "react";
import {
  HomePageBg,
  HomePageButtonWrapper,
  HomePageButtonWrapper2,
  HomePageContainer,
  HomePageContent,
  HomePageH1,
  HomePageP,
  ImageBg,
  ArrowFarward,
  ArrowRight,
  Instagram,
  RightArrow,
} from "./HomeElements";
import Sidebar from "../../Sidebar";
import NavBar from "../../Navbar";
import { Button, ButtonInsta, ButtonMore } from "../../ButtonElement";
import Footer from "../../Footer";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <NavBar toggle={toggle} position={true} />
      <HomePageContainer>
        <HomePageBg>
          <ImageBg src="https://firebasestorage.googleapis.com/v0/b/the-lash-queen.appspot.com/o/Images%2FhomeBackground%2Fbackground.png?alt=media&token=2bc82e67-a34a-4101-af05-1a33c7483062" />
        </HomePageBg>
        <HomePageContent>
          <HomePageH1>The lash Queen</HomePageH1>
          <HomePageP>
            The Bridal Makeover, Beauty Saloon, And Makeup Academy
          </HomePageP>
          <HomePageButtonWrapper>
            <Button
              href="tel:+918089459350"
              primary="true"
              dark="true"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              Call Now {hover ? <ArrowFarward /> : <ArrowRight />}
            </Button>
            <ButtonInsta href="https://www.instagram.com/thelashqueenstudio">
              <Instagram />
            </ButtonInsta>
          </HomePageButtonWrapper>
        </HomePageContent>
        <HomePageButtonWrapper2>
          <ButtonMore to="/about">
            Read More... <RightArrow />
          </ButtonMore>
        </HomePageButtonWrapper2>
      </HomePageContainer>
      <Footer />
    </>
  );
}

export default memo(Home);
