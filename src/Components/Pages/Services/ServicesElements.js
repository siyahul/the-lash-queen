import styled from "styled-components";
import bg from "../../Images/bg.jpg";
import { Link as LinkR } from "react-router-dom";

export const ServiceBg = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background: linear-gradient(to bottom, #171201 0%, #000000 100%);
  z-index: 10;
  
  }
`;

export const ServiceContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  background-image: url(${bg});
  background-position: center;
  max-width: 1200px;
  flex-wrap: wrap;
  
  }
`;
export const ServiceH1Container = styled.div`
  width: 90%;
  margin-top: 20px;
  margin-left: 20px;
  color: #ddd;
  padding: 10px;
  text-shadow: 2px 2px 10px rgba(218, 165, 32, 0.8);
  box-sizing: border-box;
  
  }
`;
export const ServiceH1 = styled.h1`
  font-family: 'Sansita Swashed', cursive;
  
  }
`;

export const ServiceH2 = styled.h2`
  font-family: "Sansita Swashed", cursive;
`;

export const Video = styled.video`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 90%;
  max-width: 720px;
  outline: none;
  border-radius: 10px;
`;

export const ServicePara = styled.p`
  border-radius: 10px;
  width: 90%;
  background: rgba(0, 0, 0, 0.5);
  font-family: "Dancing Script", cursive;
  text-align: justify;
  letter-spacing: 2px;
  line-height: 1.3;
  text-indent: 60px;
  padding: 20px;
  font-size: 20px;
  color: #fff;
  max-width: 720px;
  text-shadow: 2px 2px 10px rgba(218, 165, 32, 0.5);
  box-sizing: border-box;
`;
export const ServiceSpan = styled.span`
  font-family: inherit;
  color: #d4af37;
`;

export const ServiceUlContainer = styled.div`
  width: 80%;
  margin-top: 0px;
  margin-left: 20px;
  color: #ddd;
  padding: 10px;
  text-shadow: 2px 2px 10px rgba(218, 165, 32, 0.8);
  box-sizing: border-box;
`;

export const ServicesUl = styled.ul`
  align-items: left;
  padding: 20px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.5);
  font-size: 15px;
  text-align: right;
`;

export const ServicesLi = styled.li`
  text-align: justify;
  letter-spacing: 2px;
  text-indent: 60px;
  padding: 10px;
  font-size: 20px;
  color: #fff;
  width: 90%;
  max-width: 720px;
  text-shadow: 2px 2px 10px rgba(218, 165, 32, 0.5);
  box-sizing: border-box;
  font-family: "Sansita Swashed", cursive;
`;
export const ServiceLink = styled(LinkR)`
  text-decoration: none;
  font-family: "Dancing Script", cursive;
`;
