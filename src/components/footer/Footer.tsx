import React from "react";
import * as S from "./Footer.styles";

const Footer = () => {
  const date = new Date().getFullYear();
  console.log(date);
  return (
    <S.Footer url={require("../../assets/background.jpg")}>
      <S.ContactsWrapper>
        <S.ContactWrapper>
          <S.Mobile />
          <S.Span>+370 67462267</S.Span>
        </S.ContactWrapper>
        <S.ContactWrapper>
          <S.Email />
          <S.Span>karolisposka96@gmail.com</S.Span>
        </S.ContactWrapper>
      </S.ContactsWrapper>
    </S.Footer>
  );
};

export default Footer;
