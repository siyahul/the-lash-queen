import styled from "styled-components";
import bg from "../../Images/bg.jpg";

export const ImageGalleryBg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: linear-gradient(to bottom, #171201 0%, #000000 100%);
  z-index: 10;
  &::selection {
    background: none;
  }
`;

export const ImageGalleryContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  background-image: url(${bg});
  background-position: center;
  max-width: 1200px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  &::selection {
    background: none;
  }
`;

export const ImageGalleryContent = styled.div`
  margin: 20px;
  padding: 10px;
  height: auto;
  width: 300px;
  border-radius: 20px;
  border: 1px solid #a97510;
  background: linear-gradient(to bottom, #571c33 0%, #220e19 100%);
  box-shadow: 8px 8px 15px rgba(218, 165, 32, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &::selection {
    background: none;
  }

  &:hover {
    transform: scale(1.05);
    transition: 0.3s ease-in-out;
  }
`;
export const ImageDiv = styled.div`
  border-radius-top: 30px;
  border-radius-bottom: 30px;
  width: 90%;
  //background:linear-gradient(to bottom, #984d65 0%, #000000 100%);
  justify-self: center;
`;
export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 300px;
  border-radius: 10px;
  &::selection {
    background: none;
  }
`;

export const Title = styled.h2`
  font-family: "Grandstander", cursive;
  color: #e3c57e;
  left: 0;
  cursor: pointer;
  &::selection {
    background: none;
  }
`;

export const Description = styled.p`
  padding: 10px;
  color: #bd9028;
  cursor: pointer;
  &::selection {
    background: none;
  }
`;
export const BackdropContainer = styled.div`
  width: 90%;
  height: 90%
  position:relative;
`;
export const BackDropImage = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 90vh;
  object-fit: contain;
`;
export const BackdropTitleContainer = styled.div`
  position: absolute;
  bottom: 30%;
  left: 10%;
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.4);
  cursor: pointer;
  @media screen and (max-width: 768px) {
    bottom: 10%;
  }
  @media screen and (min-width: 1200px) {
    left: 5%;
  }
`;
export const BackDropTitle = styled.h1`
  font-family: "Grandstander", cursive;
  color: #e3c57e;
`;
export const BackDropDescription = styled.p`
  color: #ddd;
  margin: 10px;
  font-family: "Lobster", cursive;
`;
