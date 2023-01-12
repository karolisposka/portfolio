import Styled, { keyframes } from "styled-components";
import Button from "../scrollBtn/ScrollBtn";

//Makes projectCard component to slide from right on render.

const slide = keyframes`
    0%{
        transform: translateX(300px);
        opacity:0;
    }
    100%{
        transform: translateX(0);
        opacity: 1;
    }
`;

export const Container = Styled.div`
    width:100%;
    margin:2rem 0; 
    display:flex;
    flex-direction:column;
    align-items:center;
    animation:0.7s ${slide} forwards;
    @media(min-width:577px){
        flex-direction:row;
    }
`;

export const Image = Styled.img`
    object-fit:contain;
    width:100%;
    height:160px;
    margin: 0 auto;
    @media(min-width:577px){
        width:50%;
        height:350px;
    }
    
`;

export const InfoWrapper = Styled.div`
    align-self: stretch;
    flex:1;
    @media(max-width:576px){
        display:flex;
        flex-direction:column;
        align-items:center;
    }
`;

export const Title = Styled.p`
    font-weight:900;
    text-align:center;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    @media(min-width:577px){
        text-align:left;
    }

`;

export const Text = Styled.p`
    text-align:center;
    line-height:24px;
    white-space: pre-wrap;
    @media(min-width:577px){
        text-align:left;
    }
    

`;

export const LinkBtn = Styled(Button)`
    
    
`;
