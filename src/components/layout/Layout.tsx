import React from "react";
import * as S from "./layout.styles";

type props = {
  children: React.ReactNode;
  className?: string;
};

const Layout = ({ children, className }: props) => {
  return <S.Container className={className}>{children}</S.Container>;
};

export default Layout;
