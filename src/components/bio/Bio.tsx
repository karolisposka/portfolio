import React from "react";
import * as S from "./Bio.styles";

type props = {
  children: React.ReactNode;
};

const Bio = ({ children }: props) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default Bio;
