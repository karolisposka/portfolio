import React from "react";
import * as S from "./TagsList.styles";

type props = {
  title: string;
  tags: string[];
};
const TagsList = ({ tags, title }: props) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.TagsList>{tags && tags.map((tag: string) => <S.ListTag text={tag} />)}</S.TagsList>
    </S.Wrapper>
  );
};

export default TagsList;
