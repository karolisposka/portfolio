import React from "react";
import * as S from "./Container.styles";

type props = {
  children: React.ReactNode;
  styles?: React.CSSProperties;
};

const Container = ({ children, styles }: props) => {
  return <S.Container style={styles}>{children}</S.Container>;
};

export default Container;
