import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Button = styled.a`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#25D366" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 38px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#ffff" : "#01bf71")};
  }
`;

export const ButtonInsta = styled.a`
  border-radius: 15px;
  background: linear-gradient(
    290deg,
    #f58529,
    #feda77,
    #dd2a7b,
    #8134af,
    #515bd4
  );
  white-space: nowrap;
  margin-top: 20px;
  padding: 10px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.4s ease-in-out;
    background: #000;
    color: #dd2a7b;
  }
`;

export const ButtonMore = styled(LinkR)`
  border-radius: 50px;
  background: #FCC201;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 38px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #DB9200;
    color:#fff;
  }
`;
