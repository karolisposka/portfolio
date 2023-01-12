import React from "react";
import * as S from "./Tag.styles";

type props = {
  text: string;
  className?: string;
};

const Tag = ({ text, className }: props) => {
  return <S.Tag className={className}>{text}</S.Tag>;
};

export default Tag;
