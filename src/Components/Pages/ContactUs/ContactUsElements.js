import styled from "styled-components";
import bg from "../../Images/bg.jpg";

export const ContactUsBg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: linear-gradient(to bottom, #171201 0%, #000000 100%);
  z-index: 10;
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
  flex-direction: column;
  flex-wrap: wrap;
`;

export const ContactUsH1 = styled.h1`
  margin-top: 20px;
  margin-left: 20px;
  color: #ddd;
  padding: 10px;
  text-shadow: 2px 2px 10px rgba(218, 165, 32, 0.5);
  font-family: "Sansita Swashed", cursive;
`;

export const ContactUsP = styled.p`
  width: 50%;
  color: white;
  margin: 30px;
  padding: 10px;
  font-size: 25px;
  color: #ddd;
  font-family: "Dancing Script", cursive;
  text-shadow: 2px 2px 10px rgba(218, 165, 32, 0.5);
`;

export const Span = styled.span`
  margin: 0px;
  font-size: 18px;
  color: #ddd;
  text-shadow: none;
  font-family: "Sansita Swashed", cursive;
`;
export const A = styled.a`
  text-decoration: none;
  font-size: 18px;
  color: rgba(218, 165, 32, 1);
  text-shadow: none;
  font-family: "Sansita Swashed", cursive;
  padding: 10px;
  cursor: pointer;
`;

export const MapWrapper = styled.div`
  max-width: 360px;
  max-height: 360px;
  padding: 0;
`;
