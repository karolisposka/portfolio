import Styled from "styled-components";
import { AiOutlineZoomIn, AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

type props = {
  image: string;
};

export const Container = Styled.div`
  display:flex;
  padding:1rem;
  flex-direction:column;
  overflow:hidden;
  width:100%;
  height:100%;
`;

export const ImageWrapper = Styled.div`
  position:relative;
  width:100%;
`;

export const MainImage = Styled.img`
  width:100%;
  height:100%;
  object-fit:contain;
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

export const ArrowRightWrapper = Styled.div`
  position:absolute;
  right:1rem;
  display:flex;
  align-items:Center;
  justify-content:center;
  background:rgba(0,0,0,0.7);
  width:2rem;
  height:2rem;
  border-radius:50%;
`;

export const ArrowLeftWrapper = Styled.div`
  position:absolute;
  left:1rem;
  display:flex;
  align-items:Center;
  justify-content:center;
  background:rgba(0,0,0,0.7);
  width:2rem;
  height:2rem;
  border-radius:50%;
`;

export const ArrowRight = Styled(AiOutlineArrowRight)`
  font-size:24px;
  color:white;

  
`;

export const ArrowLeft = Styled(AiOutlineArrowLeft)`
  font-size:24px;
  color:white;
`;

export const Pagination = Styled.div`
  display:flex;
  margin:0.5rem auto;
`;

export const PatigationItem = Styled.div`
  width:0.75rem;
  height:0.75rem;
  margin:0 0.15rem;
  border-radius:50%;
  background: rgba(0,0,0,0.7);
`;
