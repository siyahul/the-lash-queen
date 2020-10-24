import { auth, storage } from "firebase";
import React, { useState, memo, useRef } from "react";
import Footer from "../../../Footer";
import Navbar from "../../../Navbar";
import Sidebar from "../../../Sidebar";
import { useForm } from "../../../../useForm";
import EditIcon from "@material-ui/icons/Edit";
import imageCompression from "browser-image-compression";
import {
  ProfileBg,
  ProfileContainer,
  ProfileDisplay,
  ProfileSpan,
  ProfileText,
  ProfileDisplayText,
  SpanTrue,
  SpanFalse,
  ProfileDisplayImageDiv,
  ProfileDisplayImage,
  EditInput,
  EditButton,
  ProfilePictureEdit,
} from "./ProfileElements";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

function Profile({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const [editingUserName, setEditingUserName] = useState(false);
  const fileInput = useRef();
  const [value, handleChange] = useForm({
    userName: "",
    email: "",
  });

  const history = useHistory();

  useEffect(() => {
    auth().onAuthStateChanged((authUser) => {
      if (!authUser) {
        history.push("/admin");
      }
    });
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const verifyEmail = () => {
    const profileUser = auth().currentUser;
    if (profileUser) {
      profileUser
        .sendEmailVerification()
        .then(function () {
          alert("Check your email for verification");
        })
        .catch(function (error) {
          alert(error.message);
        });
    }
  };

  const editUserName = (event) => {
    event.preventDefault();
    setEditingUserName(false);
    let updateUser = auth().currentUser;
    if (updateUser != null) {
      updateUser
        .updateProfile({ displayName: value.userName })
        .then(() => {
          alert("User Name changed");
          window.location.reload();
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };
  const upload = function (proPic) {
    console.log(proPic);
    if (proPic) {
      const uploadTask2 = storage()
        .ref(`Images/profile/${proPic.name}`)
        .put(proPic);

      uploadTask2.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          //setProgress(progress);
        },
        (error) => {
          console.log(error);
          alert(error.message);
        },
        () => {
          storage()
            .ref("Images/profile/")
            .child(proPic.name)
            .getDownloadURL()
            .then((url) => {
              let updateUser = auth().currentUser;
              if (updateUser != null) {
                updateUser
                  .updateProfile({ photoURL: url })
                  .then(() => {
                    alert("Profile Photo Updated");
                    window.location.reload();
                  })
                  .catch((err) => {
                    alert(err.message);
                  });
              }
            });
        }
      );
    } else {
      alert("no image");
    }
  };
  async function compress(image) {
    const imageFile = image;

    var options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    imageCompression(imageFile, options)
      .then(function (compressedFiles) {
        return upload(compressedFiles);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }
  const uploadImage = async (event) => {
    let proPic = event.target.files[0];
    compress(proPic);
  };
  return (
    <div>
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <Navbar toggle={toggle} />
      <ProfileBg>
        <ProfileContainer>
          <ProfileDisplay>
            <ProfileDisplayImageDiv>
              {user?.photoURL ? (
                <ProfileDisplayImage src={user?.photoURL} alt="image" />
              ) : null}
              <ProfilePictureEdit>
                <EditIcon
                  onClick={() => {
                    fileInput.current.click();
                  }}
                />
                <input
                  type="file"
                  ref={fileInput}
                  style={{ display: "none" }}
                  onChange={uploadImage}
                />
              </ProfilePictureEdit>
            </ProfileDisplayImageDiv>
            <ProfileDisplayText>
              <ProfileText>
                User Name:
                <ProfileSpan>
                  {editingUserName ? (
                    <form>
                      <EditInput
                        name="userName"
                        value={value.userName}
                        onChange={handleChange}
                        type="text"
                        placeholder="username"
                      />
                      <EditButton
                        success={true}
                        type="submit"
                        onClick={editUserName}
                      >
                        Finish
                      </EditButton>
                      <EditButton
                        danger={true}
                        type="button"
                        onClick={() => {
                          setEditingUserName(false);
                        }}
                      >
                        Cancel
                      </EditButton>
                    </form>
                  ) : (
                    <>
                      {user?.displayName ? user.displayName : "Not Provided "}
                      <EditIcon
                        onClick={() => {
                          setEditingUserName(true);
                        }}
                      />
                    </>
                  )}
                </ProfileSpan>
              </ProfileText>
              <ProfileText>
                Email Address:{" "}
                <ProfileSpan>
                  {user?.email ? user.email : "Not Provided"}
                </ProfileSpan>
              </ProfileText>
              <ProfileText>
                Verified Email Address? :{" "}
                <ProfileSpan>
                  {user?.emailVerified ? (
                    <SpanTrue>Yes Verified</SpanTrue>
                  ) : (
                    <SpanFalse>
                      Not Verified{" "}
                      <EditButton danger onClick={verifyEmail}>
                        Verify
                      </EditButton>
                    </SpanFalse>
                  )}
                </ProfileSpan>
              </ProfileText>
              <ProfileText>
                Phone Number:{" "}
                <ProfileSpan>
                  {user?.phoneNumber ? user.phoneNumber : "Not Provided"}
                </ProfileSpan>
              </ProfileText>
              <ProfileText>
                Last Signed in:{" "}
                <ProfileSpan>
                  {user?.metadata?.lastSignInTime
                    ? user.metadata.lastSignInTime
                    : "Your first Login"}
                </ProfileSpan>
              </ProfileText>
            </ProfileDisplayText>
          </ProfileDisplay>
        </ProfileContainer>
      </ProfileBg>
      <Footer />
    </div>
  );
}

export default memo(Profile);
