import React from "react";
import * as S from "./MobileMenu.styles";

const MobileMenu = () => {
  return (
    <S.MenuContainer>
      <S.Navbar>
        <S.NavLink activeClass="active" to="hero" spy={true} smooth={true} offset={-75} duration={500}>
          hero
        </S.NavLink>
        <S.NavLink activeClass="active" to="portfolio" spy={true} smooth={true} offset={-120} duration={500}>
          Portfolio
        </S.NavLink>
        <S.NavLink activeClass="active" to="about" spy={true} smooth={true} offset={-120} duration={500}>
          about
        </S.NavLink>
      </S.Navbar>
    </S.MenuContainer>
  );
};

export default MobileMenu;
