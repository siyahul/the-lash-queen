import React, { useEffect, useState, memo } from "react";
import Footer from "../../Footer";
import NavBar from "../../Navbar";
import Sidebar from "../../Sidebar";
import db from "../../../firebase";
import FlipMove from "react-flip-move";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import {
  Description,
  Image,
  ImageDiv,
  ImageGalleryBg,
  ImageGalleryContainer,
  ImageGalleryContent,
  Title,
  BackdropContainer,
  BackDropDescription,
  BackDropTitle,
  BackDropImage,
  BackdropTitleContainer,
} from "./ImageGalleryElements";
import { CloseIconBox } from "../Admin/ManageImages/ImageElements";
import { CloseIcon } from "../../Sidebar/SideBarElements";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#000",
    backdropFilter: "blur(2px)",
  },
}));

function ImageGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [imageId, setImageId] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    db.collection("images")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setImages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            image: doc.data(),
          }))
        );
      });
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setOpen(!open);
  };

  const focus = async (id) => {
    await setImageId(id);
    handleClose();
  };

  return (
    <>
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <NavBar toggle={toggle} />
      <ImageGalleryBg>
        <ImageGalleryContainer>
          <FlipMove
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {images?.map((image, id) => (
              <ImageGalleryContent key={image.id} onClick={() => focus(id)}>
                <ImageDiv>
                  <Image src={image.image.compUrl} alt="The Lash Queen" />
                </ImageDiv>
                <Title>{image.image.title}</Title>
                <Description>{image.image.description}</Description>
              </ImageGalleryContent>
            ))}
          </FlipMove>
        </ImageGalleryContainer>
      </ImageGalleryBg>
      <Footer />
      <Backdrop className={classes.backdrop} open={open}>
        <BackdropContainer>
          <CloseIconBox onClick={handleClose}>
            <CloseIcon />
          </CloseIconBox>
          <BackDropImage
            src={images[imageId]?.image.imageUrl}
            alt={images[imageId]?.image.compUrl}
          />
          <BackdropTitleContainer>
            <BackDropTitle>{images[imageId]?.image.title}</BackDropTitle>
            <BackDropDescription>
              {images[imageId]?.image.description}
            </BackDropDescription>
          </BackdropTitleContainer>
        </BackdropContainer>
      </Backdrop>
    </>
  );
}

export default memo(ImageGallery);
