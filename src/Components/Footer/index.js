import React from "react";
import {
  FooterContainer,
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
          <FooterListHeading>Services</FooterListHeading>
            <FooterListItems>Item-1</FooterListItems>
            <FooterListItems>Item-2</FooterListItems>
            <FooterListItems>Item-3</FooterListItems>
            <FooterListItems>Item-4</FooterListItems>
          </FooterList>
          </div>
          <div>
          <FooterList>
          <FooterListHeading>Services</FooterListHeading>
            <FooterListItems>Item-1</FooterListItems>
            <FooterListItems>Item-2</FooterListItems>
            <FooterListItems>Item-3</FooterListItems>
            <FooterListItems>Item-4</FooterListItems>
          </FooterList>
          </div>
          <div>
          <FooterList>
          <FooterListHeading>Services</FooterListHeading>
            <FooterListItems>Item-1</FooterListItems>
            <FooterListItems>Item-2</FooterListItems>
            <FooterListItems>Item-3</FooterListItems>
            <FooterListItems>Item-4</FooterListItems>
          </FooterList>
          </div>
      </FooterItems>
    </FooterContainer>
  );
}

export default Footer;
