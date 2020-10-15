import React from "react";
import { Link } from "react-router-dom";
import {
  FooterContainer,
  FooterDevInfo,
  FooterItems,
  FooterList,
  FooterListHeading,
  FooterListItems,
} from "./FooterElements";

function Footer() {
  return (
    <FooterContainer>
      <FooterItems>
        <div>
          <FooterList>
            <Link style={{ textDecoration: "none" }} to="/services">
              <FooterListHeading>Services</FooterListHeading>
              <FooterListItems>Bridal Makeup</FooterListItems>
              <FooterListItems>Make over</FooterListItems>
            </Link>
          </FooterList>
        </div>
        <div>
          <FooterList>
            <Link style={{ textDecoration: "none" }} to="/services">
              <FooterListHeading>Courses</FooterListHeading>
              <FooterListItems>Make-up professional course</FooterListItems>
              <FooterListItems>Make-up Diploma course</FooterListItems>
              <FooterListItems>Make-up Advanced course</FooterListItems>
            </Link>
          </FooterList>
        </div>
        <div>
          <FooterList>
            <Link style={{ textDecoration: "none" }} to="contactUs">
              <FooterListHeading>Contact Us</FooterListHeading>
            </Link>
            <a
              style={{ textDecoration: "none" }}
              href="https://www.instagram.com/thelashqueenstudio"
            >
              <FooterListItems>Instagram</FooterListItems>
            </a>
            <a style={{ textDecoration: "none" }} href="tel:+918089459350">
              <FooterListItems>Call</FooterListItems>
            </a>
          </FooterList>
        </div>
        <FooterDevInfo>
          
        </FooterDevInfo>
      </FooterItems>
    </FooterContainer>
  );
}

export default Footer;
