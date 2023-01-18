import Styled from "styled-components";
import { AiOutlineMobile, AiOutlineMail } from "react-icons/ai";

type props = {
  url: string;
};

export const Footer = Styled.footer<props>`
  padding:2rem;
  background-image: url(${(props) => props.url});
  @media(min-width:577px){
    display:flex;
    flex-direction:column;
    align-items:center;
  }

`;

export const ContactsWrapper = Styled.div`
    display:flex;
    @media(min-width:577px){
      
    }
`;

export const ContactWrapper = Styled.div`
    margin:0.5rem 0;
    display:flex;
    align-items:center;
    @media(min-width:577px){
      margin: 0.5rem 1rem;
    }

`;

export const Mobile = Styled(AiOutlineMobile)`
  font-size:36px;
`;

export const Email = Styled(AiOutlineMail)`
  font-size:36px;
`;

export const Span = Styled.span`
  font-size:24px;
  font-family: ${(props) => props.theme.fonts.name};
  margin-left: 0.5rem;
  font-weight:600;
`;
