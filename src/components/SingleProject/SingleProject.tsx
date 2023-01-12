import React from "react";
import * as S from "./SingleProject.styles";

type props = {
  children: React.ReactNode;
};

const SingleProject = ({ children }: props) => {
  return (
    <S.Container>
      <S.Section>{children}</S.Section>
    </S.Container>
  );
};

export default SingleProject;
