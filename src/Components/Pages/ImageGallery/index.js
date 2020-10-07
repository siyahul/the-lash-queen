import React, { useState } from "react";
import Footer from "../../Footer";
import NavBar from "../../Navbar";
import Sidebar from "../../Sidebar";
import { ImageGalleryContainer } from "./ImageGalleryElements";

function ImageGallery() {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <NavBar toggle={toggle} />

      <ImageGalleryContainer></ImageGalleryContainer>
      <Footer />
    </>
  );
}

export default ImageGallery;
