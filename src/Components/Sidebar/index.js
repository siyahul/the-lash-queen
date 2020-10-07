import React from "react";
import { CloseIcon, Icon, SideBarContainer, SidebarLink, SidebarRoute, SideBtnWrap, SideWrapper,SidebarMenu } from "./SideBarElements";

function Sidebar({toggle,isOpen}) {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SideWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to="about">About</SidebarLink>
          <SidebarLink onClick={toggle} to="services">Services</SidebarLink>
          <SidebarLink onClick={toggle} to="gallery">Image Gallery</SidebarLink>
          <SidebarLink onClick={toggle} to="contactUs">Contact Us</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute>Enquire</SidebarRoute>
        </SideBtnWrap>
      </SideWrapper>
    </SideBarContainer>
  );
}

export default Sidebar;
