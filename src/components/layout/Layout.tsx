import React from "react";
import * as S from "./layout.styles";

type props = {
  children: React.ReactNode;
};

const Layout = ({ children }: props) => {
  return <S.Container>{children}</S.Container>;
};

export default Layout;
