import React from "react";
import * as S from "./Title.styles";

type props = {
  title: string;
  subtitle?: string;
};

const Title = ({ title, subtitle }: props) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Gap />
      {subtitle && (
        <>
          <S.SubTitle>{subtitle}</S.SubTitle>
        </>
      )}
    </S.Wrapper>
  );
};

export default Title;
