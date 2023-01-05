import Styled from "styled-components";

export const Section = Styled.section`
  font-family: ${(props) => props.theme.fonts.name};
  max-width:1200px;
  margin:  0 auto;
  padding: 2rem;
  border-bottom: 1px solid rgba(0,0,0,0.3);
`;
