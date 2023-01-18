import React from "react";
import { CSSProperties } from "styled-components";
import * as S from "./ScrollBtn.styles";

type props = {
  to?: any;
  text: string;
  type: "button" | "scroll" | "link" | "anchor" | "submit";
  className?: string;
  style?: CSSProperties;
};

const Button = ({ to, text, type, className, style }: props) => {
  if (type === "scroll") {
    return (
      <>
        <S.ScrollBtn style={style} className={className} to={to} spy={true} smooth={true} offset={-50} duration={500}>
          {text}
        </S.ScrollBtn>
      </>
    );
  }
  if (type === "link") {
    return (
      <S.NavigateBtn style={style} to={to} className={className}>
        {text}
      </S.NavigateBtn>
    );
  }
  if (type === "anchor") {
    return (
      <S.AnchorLink style={style} href={to} className={className} target="_blank">
        {text}
      </S.AnchorLink>
    );
  } else {
    return (
      <S.Button type={type} className={className}>
        {text}
      </S.Button>
    );
  }
};

export default Button;
