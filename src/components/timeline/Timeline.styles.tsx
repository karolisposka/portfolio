import Styled, { keyframes } from "styled-components";

const renderAnimation = keyframes`
    0%{
        opacity: 0;
    }100%{
        opacity: 1;
    }

`;
export const TimelineContainer = Styled.div`
    margin: 0 auto;
    max-width:1200px;
    padding:2rem 0;
    display:grid;
    grid-template-columns: 1fr 3px 1fr;
    grid-auto-rows: auto;
    opacity: 0;
    animation: ${renderAnimation} 0.5s forwards 500ms;
`;

export const TimelineComponent = Styled.div`
    margin: 0 1rem 1rem 1rem; 
`;

export const TimeDate = Styled.p`
    width:100%;
    margin: 0;
    text-align:right;
    &.alignLeft{
         text-align: left;
    }
`;

export const TimelineLine = Styled.div`
    position:relative;
    background: ${(props) => props.theme.background.secondary};
    height: 100%;
`;

export const TimelineDot = Styled.div`
    width:15px;
    height:15px;
    border-radius:50%;
    background:${(props) => props.theme.background.primary};
    left: 50px;
    transform: translateX(-40%);

`;

export const EventCard = Styled.div`
    background: #e6e6da;
    padding: 0.5rem 1rem;
    box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.05);
`;

export const CardTitle = Styled.h3`
    font-size:12px;
    margin: 0;
    padding: 0;
    @media(min-width:577px){
        font-size:16px;
    }
`;

export const CardSubtitle = Styled.p`
    font-size: 12px;
    color: gray;
    margin: 0;
    padding:0.125rem 0;
    
`;

export const CardParagrapth = Styled.p`
  line-height:14px;
  font-size:11px;
  margin: 0;
  @media(min-width:577px){
    font-size:12px;
  }

`;
