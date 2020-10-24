import styled from "styled-components";
import bg from "../../../Images/bg.jpg";

export const ProfileBg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: linear-gradient(to bottom, #171201 0%, #000000 100%);
  z-index: 10;
`;

export const ProfileContainer = styled.div`
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
  align-items: center;
  justify-content: center;
`;
export const ProfileDisplay = styled.div`
  width: 90%;
  height: 90%;
  background: rgba(0, 0, 0, 0.8);
  min-height: 80vh;
  border: 1px solid rgba(10, 10, 10, 0.8);
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(10, 10, 10, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const SpanTrue = styled.span`
  color: green;
  font-family: "Lobster", cursive;
`;
export const SpanFalse = styled.span`
  color: red;
  font-family: "Lobster", cursive;
`;
export const ProfileSpan = styled.span`
  margin-left: 10px;
  font-family: "Lobster", cursive;
  color: #bd9028;
`;
export const ProfileText = styled.p`
  color: #ddd;
  padding: 10px;
  font-size: 20px;
  font-family: "Sansita Swashed", cursive;
`;
export const ProfileDisplayText = styled.div``;

export const ProfileDisplayImageDiv = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background: black;
  margin: 20px;
  position: relative;
  border: 2px solid lightgray;
  position: relative;
`;
export const ProfileDisplayImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100px;
  object-fit: cover;
`;
export const EditInput = styled.input`
  padding:5px;
  outline: none;
  border-radius: 5px;
  margin:10px;
  background:rgba(0, 0, 0, 0.5);
  color: #bd9028;
  border: none;
`;
export const EditButton = styled.button`
  padding:5px;
  margin:5px;
  background:${({success,danger})=>(success ?"#4bb543":danger?"#7a0012":"#fafafa")};
  color:#ddd;
  border-radius:5px;
  border:none;
  outline: none;
`;

export const ProfilePictureEdit = styled.div`
  color: black;
  position: absolute;
  bottom: 8%;
  right: 10%;
  background: lightgray;
  border-radius: 20px;
  padding: 10px;
`;
