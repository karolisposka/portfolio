import Styled from "styled-components";

type props = {
  url: string;
};
export const Container = Styled.div<props>`
  position:relative;
  font-family:${(props) => props.theme.fonts.name};
  background-image:url(${(props) => props.url});
  

`;

export const Section = Styled.section`
  margin: 0 auto;
  max-width:1200px;
  display:flex;
  flex-direction:column;
  min-height:100vh;
  align-items:center;
`;
