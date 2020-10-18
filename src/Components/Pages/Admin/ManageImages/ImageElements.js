import styled from "styled-components";
import bg from "../../../Images/bg.jpg";

export const ImageBg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: linear-gradient(to bottom, #171201 0%, #000000 100%);
  z-index:10;
  &::selection{
    background:none;
  }
`;

export const ImageContainer = styled.div`
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
  &::selection{
    background:none;
  }
`;

export const ImageContent = styled.div`
  position:relative;
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

  &::selection{
    background:none;
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
  &::selection{
    background:none;
  }
`;

export const Title = styled.h2`
  color: #e3c57e;
  left: 0;
  cursor: pointer;
  &::selection{
    background:none;
  }
`;

export const Description = styled.p`
  padding: 10px;
  color: #bd9028;
  cursor: pointer;
  &::selection{
    background:none;
  }
`;
export const AddImageto = styled.div`
  height: 50px;
  width: 300px;
  margin:20px;
  border-radius: 20px;
  border: 1px solid black;
  display: flex;
  padding: 5px;
  justify-content: center;
  align-items: center;
  border: 1px solid #a97510;
  background: linear-gradient(to bottom, #571c33 0%, #220e19 100%);
  box-shadow: 8px 8px 15px rgba(218, 165, 32, 0.1);
  cursor: pointer;
  color:#e3c57e;
`;
export const ButtonContainer = styled.div`
  width: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
`;

export const BackdropContent = styled.div`
  position:relative;
  width:350px;
  height:500px;
  background:rgba(255,255,255,0.8);
  border-radius:20px;
  display:flex;
  align-items: center;
  justify-content: center;
  padding:20px;
`;

export const TitleInput = styled.input`
  width:80%;
  margin: 20px;
  padding:5px;
  outline: none;
`;

export const DescriptionInput = styled.textarea`
  width:80%;
  margin: 20px;
  padding: 5px;
  outline: none;
`;

export const FileInput = styled.input`
  width:80%;
  margin: 20px;
  outline: none;
`;
export const FormButton = styled.button`
  
  margin: 20px;
  outline: none;
  background-color:dodgerblue;
  color:white;
  border:none;
  padding:10px;
  border-radius:10px;
`;

export const CloseIconBox = styled.div`
  position:absolute;
  top:10px;
  right:10px;
  cursor: pointer;
`;

export const ProgressBox = styled.div`
  position:absolute; 
  bottom:30px;
  width:80%;
`;

export const DeleteIconDiv = styled.div`
  position:absolute;
  top:10px;
  right:3px;
`;