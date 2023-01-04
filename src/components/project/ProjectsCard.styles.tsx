import Styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const test = keyframes`
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
    margin-top:1rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    animation-delay: 1s;
    animation: 0.7s ${test} forwards;
    @media(min-width:577px){
        flex-direction:row;
    }
`;

export const InfoWrapper = Styled.div`
    align-self: stretch;
    flex:1;
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
    @media(min-width:577px){
        text-align:left;
    }
    

`;

export const LinkBtn = Styled.button`
    

`;

export const Image = Styled.img`
    object-fit:contain;
    width:100%;
    height:250px;
    margin: 1rem auto;
    @media(min-width:577px){
        width:50%;
    }
    
`;
