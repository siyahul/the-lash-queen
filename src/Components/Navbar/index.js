import React, { useEffect, useState, memo } from "react";
import { FaBars } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../../firebase";
import { addUser } from "../../Actions";
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

function NavBar({ toggle, position }) {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(addUser(authUser));
      }
    });
  }, [dispatch]);

  useEffect(() => {
    setUser(userState);
  }, [userState]);

  console.log("running");
  console.log(userState);
  return (
    <>
      <Nav position={position}>
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
              <NavLinks to="/about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/gallery">Image Gallery</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/contactUs">Contact us</NavLinks>
            </NavItem>
            <NavBtn>
              <NavBtnLink to="/admin">
                {user ? (
                  <p>{user.displayName ? user.displayName : user.email}</p>
                ) : (
                  <p>Sign In</p>
                )}
                {/*<Link style={{color: "#010606",textDecoration:"none"}} to="/admin">Admin</Link>*/}
              </NavBtnLink>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default memo(NavBar);
