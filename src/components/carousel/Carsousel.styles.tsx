import Styled from "styled-components";
import { AiOutlineZoomIn, AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

export const Container = Styled.div`
  overflow:hidden;
  width:500px;
  height:100%;
  padding:1rem 2rem;
  position:relative;
  @media(max-width:576px){
    width:calc(100% - 4rem);
  }
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
  @media(max-width:576px){
    width:100%;
    object-fit:cover;
  }
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
