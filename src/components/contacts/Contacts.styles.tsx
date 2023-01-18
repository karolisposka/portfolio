import Styled from "styled-components";
import Title from "../title/Title";
import Button from "../scrollBtn/ScrollBtn";

export const Form = Styled.form`
  width:80%;
  border-radius:0.25rem;
  box-shadow: 7px 7px 5px 0px rgba(0,0,0,0.25);
  border:2px solid rgba(0,0,0,0.3);
  margin: 0 auto;
  padding:1rem;
  @media(max-width:576px){
    width:calc(100% - 2rem);
  }
`;

export const StyledTitle = Styled(Title)`
  
  
`;

export const SubmitBtn = Styled(Button)`
  width:100%;
  margin-top:0.5rem;
`;
