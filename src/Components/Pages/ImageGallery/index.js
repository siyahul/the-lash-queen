import React, { useEffect, useState, memo, useRef } from "react";
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
} from "./ImageGalleryElements";

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
  const imageRef = useRef();

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
  }, [setImages]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setOpen(!open);
  };

  const focus = (id) => {
    setImageId(id);
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
              <ImageGalleryContent
                ref={imageRef}
                key={image.id}
                onClick={() => focus(id)}
              >
                <ImageDiv>
                  <Image src={image.image.imageUrl} alt="" />
                </ImageDiv>
                <Title>{image.image.title}</Title>
                <Description>{image.image.description}</Description>
              </ImageGalleryContent>
            ))}
          </FlipMove>
        </ImageGalleryContainer>
      </ImageGalleryBg>
      <Footer />
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <ImageGalleryContent onClick={handleClose}>
          <ImageDiv>
            <Image src={images[imageId]?.image.imageUrl} alt="" />
          </ImageDiv>
          <Title>{images[imageId]?.image.title}</Title>
          <Description>{images[imageId]?.image.description}</Description>
        </ImageGalleryContent>
      </Backdrop>
    </>
  );
}

export default memo(ImageGallery);
