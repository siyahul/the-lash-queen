import React, { useEffect, useState, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { auth } from "../../../firebase";
import { addUser } from "../../../Actions";
import Footer from "../../Footer";
import NavBar from "../../Navbar";
import Sidebar from "../../Sidebar";
import { useForm } from "../../../useForm";
import {
  AddImage,
  AddImageSection,
  AdminBg,
  AdminContainer,
  LinkRoute,
  SignInContainer,
  SignInForm,
  SignInInput,
  SignInButton,
  LabelSignIn,
  AvatarContainer,
} from "./AdminElements";
import { Avatar } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Admin() {
  const [isOpen, setIsOpen] = useState(false);
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [value, handleChange] = useForm({
    password: "",
    email: "",
  });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log(userState);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        dispatch(addUser(authUser));
      } else {
        setUser(null);
      }
    });
  }, []);

  useEffect(() => {
    setUser(userState);
  }, [userState]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(value.email, value.password)
      .then((cred) => {
        console.log(cred);
        setUser(cred.user);
      })
      .catch((err) => {
        if (
          err.message ===
          "There is no user record corresponding to this identifier. The user may have been deleted."
        ) {
          alert("IncorrectEmail");
        } else {
          alert(err.message);
        }
      });
  };

  const signOut = () => {
    if (window.confirm("Are you sure you want to signOut")) {
      auth.signOut();
      dispatch(addUser(null));
    }
  };

  const forgotPassword = () => {
    if (value.email !== "") {
      auth
        .sendPasswordResetEmail(value.email)
        .then(() => {
          alert("Reset Password Link sent successfully");
        })
        .catch((err) => {
          alert(err.message);
        });
    } else {
      alert("Enter Your Email");
    }
  };

  return (
    <div>
      <Sidebar toggle={toggle} isOpen={isOpen} user={user} />
      <NavBar toggle={toggle} />

      <AdminBg>
        <AdminContainer>
          {!user ? (
            <SignInContainer>
              <SignInForm autoComplete="off">
                <LabelSignIn for="email">Email</LabelSignIn>
                <SignInInput
                  name="email"
                  type="email"
                  value={value.email}
                  onChange={handleChange}
                />
                <LabelSignIn for="password">Password</LabelSignIn>
                <SignInInput
                  name="password"
                  type="password"
                  value={value.password}
                  onChange={handleChange}
                />
                <SignInButton primary={true} type="submit" onClick={signIn}>
                  Sign In
                </SignInButton>
              </SignInForm>
              <SignInButton onClick={forgotPassword}>
                Forgot Your Password
              </SignInButton>
            </SignInContainer>
          ) : (
            <>
              <AvatarContainer>
                <Avatar
                  src={user.photoURL}
                  alt={user.displayName || user.email}
                  onClick={handleClick}
                />
              </AvatarContainer>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={() => {
                    history.push("/admin/profile");
                  }}
                >
                  Profile
                </MenuItem>
                <MenuItem onClick={signOut}>Logout</MenuItem>
              </Menu>

              <LinkRoute to="/admin/images">
                <AddImageSection>
                  <AddImage>Manage images</AddImage>
                </AddImageSection>
              </LinkRoute>
            </>
          )}
        </AdminContainer>
      </AdminBg>

      <Footer />
    </div>
  );
}

export default memo(Admin);
