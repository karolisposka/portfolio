import React from "react";
import * as S from "./Tag.styles";

type props = {
  text: string;
};

const Tag = ({ text }: props) => {
  return <S.Tag>{text}</S.Tag>;
};

export default Tag;
