import Styled from "styled-components";

export const Tag = Styled.div`
    border: 2px solid ${(props) => props.theme.background.secondary};
    padding: 0.25rem 0.5rem;
    border-radius:0.25rem;
    text-transform: capitalize;

`;
