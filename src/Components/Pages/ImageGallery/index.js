import React, { useState } from "react";
import Footer from "../../Footer";
import NavBar from "../../Navbar";
import Sidebar from "../../Sidebar";
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
    transition: "all 5s ease-in-out",
  },
}));

function ImageGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [imageId, setImageId] = useState(0);
  const [images, setImages] = useState([
    {
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/714O7s0PS6L._SL1350_.jpg",
      title: "Title1",
      description: "This is Description",
    },
    {
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/714O7s0PS6L._SL1350_.jpg",
      title: "Title2",
      description: "This is Description",
    },
    {
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/714O7s0PS6L._SL1350_.jpg",
      title: "Title3",
      description: "This is Description",
    },
  ]);

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
          {images.map((image, id) => (
            <ImageGalleryContent onClick={() => focus(id)}>
              <ImageDiv>
                <Image src={image.imageUrl} alt="" />
              </ImageDiv>
              <Title>{image.title}</Title>
              <Description>{image.description}</Description>
            </ImageGalleryContent>
          ))}
        </ImageGalleryContainer>
      </ImageGalleryBg>
      <Footer />
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <ImageGalleryContent onClick={focus}>
          <ImageDiv>
            <Image src={images[imageId].imageUrl} alt="" />
          </ImageDiv>
          <Title>{images[imageId].title}</Title>
          <Description>{images[imageId].description}</Description>
        </ImageGalleryContent>
      </Backdrop>
    </>
  );
}

export default ImageGallery;
