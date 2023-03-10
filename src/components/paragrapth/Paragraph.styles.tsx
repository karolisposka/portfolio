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
    animation-delay: 1.4s;
    animation: ${fadeIn} 0.7s forwards;
`;

export const Title = Styled.span`
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 1.3px;
    font-weight:900;

`;

export const Paragrapth = Styled.p`
    letter-spacing:1.5px;
    line-height:24px;
`;
