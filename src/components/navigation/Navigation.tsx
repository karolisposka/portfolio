import React, { useState } from "react";
import * as S from "./Navigation.styles";

type props = {
  handleClick: () => void;
};

const Navigation = ({ handleClick }: props) => {
  const [btnState, setBtnState] = useState<boolean>(false);
  return (
    <S.Header>
      <S.ContentFlex>
        <S.LogoWrapper>
          <S.ProfileImage src={require("../../assets/K.Poska_Foto.jpg")} alt="profile" />
        </S.LogoWrapper>
        <S.Navbar>
          <S.NavLink activeClass="active" to="hero" spy={true} smooth={true} offset={-100} duration={500}>
            hero
          </S.NavLink>
          <S.NavLink activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={500}>
            about
          </S.NavLink>
          <S.NavLink activeClass="active" to="portfolio" spy={true} smooth={true} offset={-100} duration={500}>
            Portfolio
          </S.NavLink>
          <S.NavLink activeClass="active" to="contacts" spy={true} smooth={true} offset={-100} duration={500}>
            Contacts
          </S.NavLink>
        </S.Navbar>
        <S.MenuButton
          aria-expanded={btnState}
          onClick={() => {
            if (btnState === false) {
              setBtnState(true);
            } else {
              setBtnState(false);
            }
            handleClick();
          }}
        >
          <S.Svg viewBox="0 0 100 100" width="30px" height="30px">
            <S.Rect className="line first-line" width="80" height={10} />
            <S.Rect className="line second-line" width="80" height={10} />
            <S.Rect className="line third-line" width="80" height={10} />
          </S.Svg>
        </S.MenuButton>
      </S.ContentFlex>
    </S.Header>
  );
};

export default Navigation;
