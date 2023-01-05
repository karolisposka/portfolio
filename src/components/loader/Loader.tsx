import React from "react";
import * as S from "./Loader.styles";

const Loader = () => {
  return (
    <S.LoaderContainer background={require("../../assets/background.jpg")}>
      <S.Loader>
        <S.LoaderItem />
        <S.LoaderItem />
        <S.LoaderItem />
      </S.Loader>
    </S.LoaderContainer>
  );
};

export default Loader;
