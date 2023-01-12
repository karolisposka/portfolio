import React from "react";
import * as S from "./ScrollBtn.styles";

type props = {
  to?: any;
  text: string;
  type: "button" | "scroll" | "link";
  className?: string;
};

const Button = ({ to, text, type, className }: props) => {
  if (type === "scroll") {
    return (
      <>
        <S.ScrollBtn className={className} to={to} spy={true} smooth={true} offset={-100} duration={500}>
          {text}
        </S.ScrollBtn>
      </>
    );
  } else {
    return (
      <S.NavigateBtn to={to} className={className}>
        {text}
      </S.NavigateBtn>
    );
  }
};

export default Button;
