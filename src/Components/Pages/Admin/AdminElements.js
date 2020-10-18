import styled from "styled-components";
import bg from "../../Images/bg.jpg";
import {Link as LinkR} from 'react-router-dom'

export const AdminBg = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background: linear-gradient(to bottom, #171201 0%, #000000 100%);
  z-index: 10;
  &::selection {
    background: none;
  }
`;

export const AdminContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  background-image: url(${bg});
  background-position: center;
  max-width: 1200px;
  flex-wrap: wrap;
  &::selection {
    background: none;
  }
`;

export const AddImageSection = styled.div`
  height: 50px;
  width: 300px;
  border-radius: 20px;
  border: 1px solid black;
  display: flex;
  padding: 5px;
  justify-content: center;
  align-items: center;
  border: 1px solid #a97510;
  background: linear-gradient(to bottom, #571c33 0%, #220e19 100%);
  box-shadow: 8px 8px 15px rgba(218, 165, 32, 0.1);
`;

export const LinkRoute = styled(LinkR)`
 text-decoration: none;
`;

export const AddImage = styled.h1`
  text-decoration:none;
  color:#ddd;
  transition: all 0.3s ease-in-out;
  font-family:'Sansita Swashed', cursive;
  &:hover{
      color:#a97510;
      transition: all 0.3s ease-in-out;
  }
`;

export const SignInContainer = styled.div`
  box-sizing:border-box;
  max-width:350px;
  width: 100%;
  height:400px;
  border:1px solid #fff;
  background: rgba(255,255,255,0.5);
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  border-radius:20px;
`;

export const LabelSignIn = styled.label`
  color:black;
`;

export const SignInForm = styled.form`
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;
`;

export const SignInInput = styled.input`
  padding:10px;
  border-radius:10px;
  outline: none;
  border: none;
  margin:10px;
  background:#ddd;
`;

export const SignInButton = styled.button`
  padding: ${({primary})=>primary?"10px":"8px"};
  margin:10px;
  border-radius:${({primary})=>primary?"10px":"15px"};
  background-color:${({primary})=>primary?"dodgerblue":"orange"};
  border:none;
  outline:none;
  color:white;
`;