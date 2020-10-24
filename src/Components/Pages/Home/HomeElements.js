import styled from "styled-components";
import { MdCall } from "react-icons/md";
import { VscCallOutgoing } from "react-icons/vsc";
import { GrInstagram } from "react-icons/gr";
import { FiArrowRight } from "react-icons/fi";

export const HomePageContainer = styled.div`
  background: linear-gradient(to bottom, #171201 0%, #000000 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 2;
`;

export const HomePageBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageBg = styled.img`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HomePageContent = styled.div`
  z-index: 3;
  margin-top: 200px;
  max-width: 1200px;
  position: relative;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomePageH1 = styled.h1`
  color: #fafad2;
  font-size: 48px;
  text-align: center;
  text-shadow: 2px 2px 5px gold;

  @media (max-width: 865px) {
    font-size: 40px;
  }
  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HomePageP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  text-shadow: 3px 3px 5px #aa6b39;

  @media screen and (max-width: 865px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HomePageButtonWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowFarward = styled(MdCall)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(VscCallOutgoing)`
  margin-left: 8px;
  font-size: 20px;
`;

export const Instagram = styled(GrInstagram)`
  font-size: 20px;
`;
export const HomePageButtonWrapper2 = styled.div`
  position: absolute;
  margin-bottom: 10px;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;

  @media (min-width: 1200px) {
    left: auto;
    right: auto;
  }
`;

export const RightArrow = styled(FiArrowRight)`
    font size:18px;
`;
