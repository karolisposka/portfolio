import Styled from "styled-components";

export const Container = Styled.div`
  &.column{
    display:flex;
    width:100%;
    flex-direction:column;
    @media(min-width:576px){
      display:flex;
      flex-direction:row;
    }
  }
  
  &.flex{
    width:50%;
    @media(max-width:576px){
      width:100%;
    }
  }

`;
