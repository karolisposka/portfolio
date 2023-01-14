import React from "react";
import { CSSProperties } from "styled-components";
import * as S from "./TagsList.styles";

type props = {
  title: string;
  tags: string[];
  style?: CSSProperties;
};
const TagsList = ({ tags, title, style }: props) => {
  return (
    <S.Wrapper style={style}>
      <S.Title>{title}</S.Title>
      <S.TagsList>{tags && tags.map((tag: string) => <S.ListTag text={tag} />)}</S.TagsList>
    </S.Wrapper>
  );
};

export default TagsList;
