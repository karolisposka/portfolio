import React from "react";
import { CSSProperties } from "styled-components";
import * as S from "./Paragraph.styles";

type props = {
  title?: string;
  text: string;
  style?: CSSProperties;
};

const Paragraph = ({ title, text, style }: props) => {
  return (
    <S.Wrapper style={style}>
      {title && <S.Title>{title}</S.Title>}
      <S.Paragrapth>{text}</S.Paragrapth>
    </S.Wrapper>
  );
};

export default Paragraph;
