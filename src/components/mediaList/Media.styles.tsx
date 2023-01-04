import Styled from "styled-components";
import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as Linkedin } from "../../assets/linkedin.svg";

export const MediaContainer = Styled.div`
  position:absolute;
  left: 1rem;
  top: 45vh;
  border: 1px solid rgba(0,0,0,0.3);
  border-radius:.25rem;
  overflow:hidden;
  box-sizing:border-box;
  z-index:2;
`;

export const List = Styled.ul`
  margin:0;
  padding:0;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

export const Link = Styled.a`
  margin:0;
  cursor:pointer;
  transition:0.3s ease-in-out;
  width:100%;
  &:hover{
    background:#def10ca2;
  }
  &:visited{ 
    background:#474d09a1;
  }

`;

export const GitIcon = Styled(Github)`
  padding:0.25rem;
 

`;

export const LinkedinIcon = Styled(Linkedin)`
  padding:0.25rem;
`;
