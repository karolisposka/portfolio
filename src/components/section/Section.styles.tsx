import Styled from "styled-components";

export const Section = Styled.section`
  font-family: ${(props) => props.theme.fonts.name};
  padding:1rem;
  border-bottom: 1px solid rgba(0,0,0,0.3);
`;
