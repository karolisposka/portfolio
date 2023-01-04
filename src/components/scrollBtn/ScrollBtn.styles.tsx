import Styled from "styled-components";
import { Link } from "react-scroll";

export const ScrollBtn = Styled(Link)`
  position:relative;
  padding: 0.5rem 1rem;
  clip-path: polygon(0 0, 100% 0, 95% 99%, 5% 99%);
  border-radius:0.25rem;
  background:yellow;
  box-shadow: 50px 50px 50px black;
  font-weight:600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  transition:0.2s ease-in;
  &:hover{
    background:#def10ca2;
  }
  
`;

export const ScrollBtnShadow = Styled.div`
    background:black;
    position:absolute;
    top:5rem;
    left:1rem;
    width:2rem;
    height:1rem;
`;
