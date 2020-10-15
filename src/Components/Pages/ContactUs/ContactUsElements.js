import styled from 'styled-components';
import bg from "../../Images/bg.jpg";


export const ContactUsBg = styled.div`
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

export const ContactUsContainer = styled.div`
height: 100%;
min-height: 100vh;
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

export const ContactUsH1 = styled.h1`
    margin-top:20px;
    margin-left:20px;
    color:#ddd;
    padding:10px;
    text-shadow: 2px 2px 10px rgba(218, 165, 32, 0.5);
`;