import Styled from "styled-components";
import { AiOutlineZoomIn, AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

export const Container = Styled.div`
  overflow:hidden;
  width:500px;
  height:100%;
  position:relative;
`;

export const ImageWrapper = Styled.div`
  position:relative;
  height:100%;
`;

export const MainImage = Styled.img`
  width:500px;
  height:100%;
  object-fit:contain;
  border-radius:0.25rem;
`;

export const ZoomIn = Styled(AiOutlineZoomIn)`
  position:absolute;
  bottom:1rem;
  right:1rem;
  color:white;
  font-size:24px;
  cursor:pointer;
  transition:0.3s ease-in-out;
  &:hover{
    transform:scale(1.2);
  }
`;

export const Navigation = Styled.div`
  position:relative;
  z-index:999;
  height:100%;
`;

export const ArrowRightWrapper = Styled.button`
  position:absolute;
  display:flex;
  right:1rem;
  align-items:Center;
  justify-content:center;
  background:rgba(0,0,0,0.7);
  width:2rem;
  height:2rem;
  border-radius:50%;
  z-index:99;
  cursor:pointer;
`;

export const ArrowLeftWrapper = Styled.button`
  position:absolute;
    display:flex;
    left:1rem;
    align-items:Center;
    justify-content:center;
    background:rgba(0,0,0,0.7);
    width:2rem;
    height:2rem;
    border-radius:50%;
    z-index:99;
    cursor:pointer;
  
`;

export const ArrowRight = Styled(AiOutlineArrowRight)`
  font-size:24px;
  color:red;
  z-index:99;
`;

export const ArrowLeft = Styled(AiOutlineArrowLeft)`
  font-size:24px;
  color:red;
  cursor:pointer;
`;
