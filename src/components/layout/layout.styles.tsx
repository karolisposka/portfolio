import Styled from "styled-components";

export const Container = Styled.div`
  display:flex;
  width:100%;
  flex-direction:column;
  @media(min-width:576px){
    display:flex;
    flex-direction:row;
  }

`;
