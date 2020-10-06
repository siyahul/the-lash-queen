import React from "react";
import { FaBars } from "react-icons/fa";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./NavbarElements";
import logo from "../Images/logo.png";

function NavBar({toggle}) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <img
              src={logo}
              alt="The Lash Queen"
              style={{
                height: "60px",
                objectFit: "contain",
                marginRight: "15px",
              }}
            />{" "}
            The Lash Queen
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="imageGallery">Image Gallery</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contactUs">Contact us</NavLinks>
            </NavItem>
            <NavBtn>
            <NavBtnLink to="/signup">Sign Up</NavBtnLink>
          </NavBtn>
          </NavMenu>
          
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default NavBar;
