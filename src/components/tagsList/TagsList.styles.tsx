import Styled, { keyframes } from "styled-components";
import Tag from "../tag/Tag";

const fadeIn = keyframes`
  0%{
    transform: translateX(200px);
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
    @media(min-width:577px){
      
    }


`;

export const Title = Styled.span`
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 1.3px;
    font-weight:900;
`;

export const TagsList = Styled.div`
    display:flex;
    flex-wrap:wrap;
    margin-top:0.5rem;

`;

export const ListTag = Styled(Tag)`
    margin: 0.25rem 0.5rem 0.25rem 0;
`;
