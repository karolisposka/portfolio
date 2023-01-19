import Styled, { keyframes } from "styled-components";

const slideAnimation = keyframes`
  0%{
    transform: translateX(-300px);
    opacity:0;
  }100%{
    transform: translateX(0);
    opacity:1;
  }
`;

export const Wrapper = Styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  font-family: ${(props) => props.theme.fonts.name};
  animation-delay: 0.3s;
  animation: 0.7s ${slideAnimation} forwards;
  padding: 2rem 0;
`;

export const Title = Styled.h1`
  text-transform: uppercase;
  letter-spacing: 1.2px;
  text-align:center;
  margin: 0;
  font-weight:600;
`;

export const Gap = Styled.div`
  width:4rem;
  height:3px;
  border-radius:5rem;
  margin:0.5rem;
  background: ${(props) => props.theme.background.primary}; 
`;

export const SubTitle = Styled.span`
  text-align:center;
  
`;
