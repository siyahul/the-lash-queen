import React, { useEffect, useState, memo } from "react";
import { auth } from "../../../../firebase";
import { addUser } from "../../../../Actions";
import Footer from "../../../Footer";
import NavBar from "../../../Navbar";
import Sidebar from "../../../Sidebar";
import db, { storage } from "../../../../firebase";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import { LinearProgress, Typography, Box } from "@material-ui/core";
import {
  Description,
  Image,
  ImageBg,
  ImageContainer,
  ImageContent,
  ImageDiv,
  Title,
  AddImageto,
  ButtonContainer,
  BackdropContent,
  TitleInput,
  DescriptionInput,
  FileInput,
  FormButton,
  CloseIconBox,
  ProgressBox,
  DeleteIconDiv,
} from "./ImageElements";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#000",
    backdropFilter: "blur(2px)",
  },
}));

function Images() {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const unsubscribe = () =>
      db
        .collection("images")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setImages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              images: doc.data(),
            }))
          );
        });
    unsubscribe();
  }, []);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        dispatch(addUser(authUser));
      } else {
        history.push('/admin')
      }
    });
  }, []);

  useEffect(() => {
    setUser(userState);
  }, [userState]);

  function redirect() {
    history.push("/admin");
  }


  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const addImage = () => {
    handleClose();
  };
  const handleClose = () => {
    setOpen(!open);
  };

  const uploadImage = (e) => {
    e.preventDefault();
    setUploading(true);
    if (file) {
      const uploadTask = storage
        .ref(`Images/galleryImage/${file.name}`)
        .put(file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
          alert(error.message);
        },
        () => {
          storage
            .ref("Images/galleryImage/")
            .child(file.name)
            .getDownloadURL()
            .then((url) => {
              db.collection("images").add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                description: description,
                imageUrl: url,
                title: title,
                name: file.name,
              });
              setProgress(0);
              setDescription("");
              setTitle("");
              setFile(null);
              setUploading(false);
              handleClose();
            });
        }
      );
    } else {
      alert("No image selected");
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const storageRef = storage.ref();

  const handleDelete = (imageId, name) => {
    let desertRef = storageRef.child(`Images/galleryImage/${name}`);
    if (
      window.confirm(
        "Are you sure to delete this image it can't be recovered"
      ) &&
      name
    ) {
      desertRef
        .delete()
        .then(function () {
          db.collection("images").doc(imageId).delete();
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <>
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <NavBar toggle={toggle} />
      <ImageBg>
        <ImageContainer>{user?(
          <>
          <ButtonContainer>
            <AddImageto onClick={addImage}>
              <h1>Add Image</h1>
            </AddImageto>
          </ButtonContainer>
          <FlipMove
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {images.map((image, id) => (
              <ImageContent key={image.id}>
                <DeleteIconDiv
                  onClick={() => handleDelete(image.id, image.images.name)}
                >
                  <CloseIcon
                    style={{ fontSize: "xtra-large", color: "lightgray" }}
                  />
                </DeleteIconDiv>

                <ImageDiv>
                  <Image src={image.images.imageUrl} alt="" />
                </ImageDiv>
                <Title>{image.images.title}</Title>
                <Description>{image.images.description}</Description>
              </ImageContent>
            ))}
          </FlipMove>
          </>
        ):(
          <ButtonContainer>
            <AddImageto onClick={redirect}>
              <h6>You are Not Signed in click here to go to sign in page</h6>
            </AddImageto>
          </ButtonContainer>
        )}
          
        </ImageContainer>
      </ImageBg>
      <Footer />
      <Backdrop className={classes.backdrop} open={open}>
        <BackdropContent>
          <CloseIconBox onClick={handleClose}>
            <CloseIcon />
          </CloseIconBox>
          <form autoComplete="off">
            <TitleInput
              name="title"
              value={title}
              onChange={handleTitleChange}
              placeholder="Title"
            />
            <DescriptionInput
              value={description}
              onChange={handleDescriptionChange}
              name="description"
              placeholder="Description"
            />
            <FileInput
              name="file"
              onChange={handleFileChange}
              type="file"
              accept="image/*"
            />
            <FormButton
              disabled={uploading}
              onClick={uploadImage}
              type="submit"
            >
              Add Image
            </FormButton>
          </form>
          {uploading ? (
            <ProgressBox>
              <LinearProgressWithLabel value={progress} />
            </ProgressBox>
          ) : null}
        </BackdropContent>
      </Backdrop>
    </>
  );
}

export default memo(Images);

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
