import Styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0%{
    transform: translateX(-200px);
    opacity:0;
  } 100%{
    transform: translateX(0);
    opacity: 1;
  } 
`;
export const Wrapper = Styled.div`
    flex:1;
    margin:2rem 0;
    animation-delay: 1.4s;
    animation: ${fadeIn} 0.7s forwards;
`;

export const Title = Styled.h3`
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 1.3px;
    font-weight:900;

`;

export const Paragrapth = Styled.p`
    letter-spacing:1.2px;
    line-height:20px;

`;
