import Styled from "styled-components";
import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as Linkedin } from "../../assets/linkedin.svg";
import { AiOutlineMobile, AiOutlineMail, AiOutlineCopyrightCircle } from "react-icons/ai";

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
    flex-direction:column;
    @media(min-width:577px){
      flex-direction:row; 
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

export const MediaList = Styled.div`
  display:flex;
  justify-content:Center;
  margin: 1rem;

`;

export const Anchor = Styled.a`
  
  
`;

export const LinkedinIcon = Styled(Linkedin)`
  padding:0.5rem;
  font-size:24px;

`;

export const GitHubIcon = Styled(Github)`
  padding: 0.5rem;
  font-size:24px;
  
`;

export const Mobile = Styled(AiOutlineMobile)`
  font-size:18px;
  @media(min-width:577px){
    font-size:24px;
  }
`;

export const Email = Styled(AiOutlineMail)`
  font-size:18px;
  @media(min-width:577px){
    font-size:24px;
  }
`;

export const Copyright = Styled(AiOutlineCopyrightCircle)`
  margin: 0,25rem;
`;

export const Span = Styled.span`
  font-size:18px;
  font-family: ${(props) => props.theme.fonts.name};
  margin-left: 0.5rem;
  font-weight:600;
  display:flex;
  align-items:center;
  @media(min-width:577px){

  }

`;
