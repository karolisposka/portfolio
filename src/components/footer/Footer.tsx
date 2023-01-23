import React from "react";
import * as S from "./Footer.styles";
import Media from "../mediaList/Media";

const Footer = () => {
  const date = new Date().getFullYear();
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
      <S.MediaList>
        <S.Anchor href="https://www.linkedin.com/in/karolis-po%C5%A1ka-b17344220/" target="_blank">
          <S.LinkedinIcon />
        </S.Anchor>
        <S.Anchor href="https://github.com/karolisposka" target="_blank">
          <S.GitHubIcon />
        </S.Anchor>
      </S.MediaList>
    </S.Footer>
  );
};

export default Footer;
