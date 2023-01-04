import React from "react";
import * as S from "./Navigation.styles";

type props = {
  handleClick: () => void;
};

const Navigation = ({ handleClick }: props) => {
  return (
    <S.Header>
      <S.LogoWrapper></S.LogoWrapper>
      <S.Navbar>
        <S.NavLink activeClass="active" to="hero" spy={true} smooth={true} offset={-75} duration={500}>
          hero
        </S.NavLink>
        <S.NavLink activeClass="active" to="portfolio" spy={true} smooth={true} offset={-75} duration={500}>
          Portfolio
        </S.NavLink>
        <S.NavLink activeClass="active" to="about" spy={true} smooth={true} offset={-200} duration={500}>
          about
        </S.NavLink>
      </S.Navbar>
      <S.BurgerMenu onClick={handleClick}>
        <S.BurgerMenuItem />
      </S.BurgerMenu>
    </S.Header>
  );
};

export default Navigation;
