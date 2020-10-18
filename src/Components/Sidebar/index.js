import React, { memo, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../../firebase";
import { addUser } from "../../Actions";
import {
  CloseIcon,
  Icon,
  SideBarContainer,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
  SideWrapper,
  SidebarMenu,
} from "./SideBarElements";

function Sidebar({ toggle, isOpen }) {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(addUser(authUser));
      }
    });
  }, []);

  useEffect(() => {
    setUser(userState);
  }, [userState]);

  // console.log(user);
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SideWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to="/about">
            About
          </SidebarLink>
          <SidebarLink onClick={toggle} to="/services">
            Services
          </SidebarLink>
          <SidebarLink onClick={toggle} to="/gallery">
            Image Gallery
          </SidebarLink>
          <SidebarLink onClick={toggle} to="/contactUs">
            Contact Us
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/admin">
            {!user
              ? "Sign In"
              : user?.displayName
              ? user?.displayName
              : user?.email}
          </SidebarRoute>
        </SideBtnWrap>
      </SideWrapper>
    </SideBarContainer>
  );
}

export default memo(Sidebar);
