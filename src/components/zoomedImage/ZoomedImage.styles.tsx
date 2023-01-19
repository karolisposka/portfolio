import Styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";

type props = {
  image: string;
};

export const Container = Styled.div<props>`
  top:0;
  left:0;
  width:100%;
  min-height:100vh;
  height:100;
  position:absolute;
  z-index:3;
 
  background: rgba(0,0,0,0.9);
  background-position:center;
  background-repeat:no-repeat;
  background-image: url(${(props) => props.image});
`;

export const CloseBtn = Styled(AiFillCloseCircle)`
  color: white;
  float: right;
  font-size:24px;
  margin: 1rem;
  cursor:pointer;

`;
