import Styled from "styled-components";

export const InputContainer = Styled.div`
  padding:0.5rem 0;
  display:flex;
  flex-direction:column;
  font-family:${(props) => props.theme.fonts.name};
`;

export const LabelWrapper = Styled.div`
  display:flex;
  justify-content:space-between;

`;

export const Label = Styled.label`
  font-weight:600;
  letter-spacing:1.2px;
  text-transform:uppercase;
  padding:0.25rem;

`;

type props = {
  error: string | undefined;
};

export const Input = Styled.input<props>`
  padding:0.75rem 0.25rem;
  display:inline-block;
  border: ${(props) => (props.error ? "1px solid #DC3535" : "1px solid blue")};
  border-radius:0.5rem;
  outline: none;
`;

export const Error = Styled.span`
  color: #DC3535;
  padding:0.25rem 0.5rem;
  

`;

export const Textarea = Styled.textarea<props>`
  display:block;
  resize: none;
  border: ${(props) => (props.error ? "1px solid #DC3535" : "1px solid blue")};
  outline: none;
  border-radius:0.5rem;
  &:focus{
    border: 1px solid blue;
  }
`;
