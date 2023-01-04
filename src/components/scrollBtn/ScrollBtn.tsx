import React from "react";
import * as S from "./ScrollBtn.styles";

type props = {
  to: string;
  text: string;
  type: "button" | "scroll";
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
    return <button> hello </button>;
  }
};

export default Button;
