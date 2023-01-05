import Styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";

export const ScrollBtn = Styled(LinkScroll)`
  position:relative;
  padding: 0.5rem 1rem;
  clip-path: polygon(0 0, 100% 0, 95% 99%, 5% 99%);
  border-radius:0.25rem;
  background:#F5EA5A;
  box-shadow: 50px 50px 50px black;
  font-weight:600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  transition:0.2s ease-in;
  &:hover{
    background:#def10ca2;
  }
  
`;

export const NavigateBtn = Styled(Link)`
  position:relative;
  padding: 0.5rem 1rem;
  clip-path: polygon(0 0, 100% 0, 95% 99%, 5% 99%);
  border-radius:0.25rem;
  background:#F5EA5A;
  box-shadow: 50px 50px 50px black;
  font-weight:600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  transition:0.2s ease-in;
  text-decoration:none;
  color: black;
  &:hover{
    background:#def10ca2;
  }
`;
