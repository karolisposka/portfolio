import Styled, { keyframes, css } from "styled-components";
import Title from "../title/Title";
import Button from "../scrollBtn/ScrollBtn";

export const Form = Styled.form`
  width:60%;
  position:relative;
  border-radius:0.25rem;
  box-shadow: 7px 7px 5px 0px rgba(0,0,0,0.25);
  border:2px solid rgba(0,0,0,0.3);
  margin: 0 auto;
  padding:1rem;
  overflow:Hidden;
  @media(max-width:576px){
    width:calc(100% - 2rem);
  }
`;

type notificationProps = {
  response: boolean;
};

const rendered = keyframes`
  0%{
    top: -30px;
  }  
  100%{
    top: 0;
  }
`;

const closed = keyframes`
  0%{
    top:0;
  }  
  100%{
    top: -30px;
  }
`;

const animationEnter = css`
  animation: 1s ${rendered} forwards;
`;

const animationClose = css`
  animation: 1s ${closed} forwards;
`;

export const Notification = Styled.div<notificationProps>`
  width:100%;
  position:absolute;
  background:green;
  color:white;
  top:0;
  left:0;
  ${(props) => (props.response ? animationClose : animationEnter)};
`;

export const StyledTitle = Styled(Title)`
  
  
`;

export const SubmitBtn = Styled(Button)`
  width:100%;
  margin-top:0.5rem;
`;
