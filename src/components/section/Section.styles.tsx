import Styled from "styled-components";

export const Container = Styled.div`
  background: rgb(246,246,249);
  background: linear-gradient(180deg, rgba(246,246,249,1) 0%, rgba(255,255,255,1) 1%, rgba(238,236,236,1) 100%);

`;

export const Section = Styled.section`
  font-family: ${(props) => props.theme.fonts.name};
  max-width:1200px;
  min-height:75vh;
  margin:  0 auto;
  padding: 2rem;
`;
