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
      <S.TagsList>
        {tags && tags.map((tag: any, index: number) => <S.ListTag key={index} text={tag.attributes.tech} />)}
      </S.TagsList>
    </S.Wrapper>
  );
};

export default TagsList;
