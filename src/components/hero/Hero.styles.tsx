import Styled, { keyframes } from "styled-components";
import Button from "../scrollBtn/ScrollBtn";

type props = {
  url: string;
};
export const Container = Styled.section<props>`
    background-image: url(${(props) => props.url});
    background-size:cover;
    height:calc(100vh - 130px);
    display:Flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    font-family:${(props) => props.theme.fonts.name};
    position:relative;
    @media(max-width:576px){
        
    }
    
`;

export const Title = Styled.h1`
    font-weight:900;
    font-size:48px;
    text-transform: uppercase;
    letter-spacing: 3px;
    @media(max-width:576px){
        font-size:24px;
        letter-spacing: 2px;
    }
`;

export const Span = Styled.span`
    color: #F5EA5A;
`;

export const Subtitle = Styled.p`
    display:block;
    text-align:center;
    @media(max-width:576px){
        font-size:12px;
        letter-spacing: 1.5px;
        text-align:center;
        margin: 0 3.5rem;
    }
    
`;

export const ScrollIndicator = Styled.div`
    width:1rem;
    height:2rem;
    border-radius:2rem;
    position:absolute;
    top:70vh;
    border:1px solid rgba(0,0,0,0.3); //pakeisti spalva
    @media(max-width:567px){
        top: 75vh;
    }
`;

const bounceAnimation = keyframes`
    0%{
        transform: translateY(0rem);
        opacity: 1;
    }
    100%{
        transform: translateY(1.2rem);
        opacity: 0;
    }

`;

export const ScrollIndicatorItem = Styled.div`
    margin:0.25rem auto;
    width:0.25rem;
    height:0.25rem;
    border-radius:50%;
    animation: ${bounceAnimation} 1.5s infinite;
    background:black; //pakeisti spalva
   

`;

export const ScrollBtn = Styled(Button)`
    margin-top:3rem;

`;
