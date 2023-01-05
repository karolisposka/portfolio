import React from "react";
import * as S from "./Paragraph.styles";

type props = {
  title?: string;
  text: string;
};

const Paragraph = ({ title, text }: props) => {
  return (
    <S.Wrapper>
      {title && <S.Title>{title}</S.Title>}
      <S.Paragrapth>{text}</S.Paragrapth>
    </S.Wrapper>
  );
};

export default Paragraph;
