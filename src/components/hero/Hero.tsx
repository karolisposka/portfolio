import React from "react";
import * as S from "./Hero.styles";
import Media from "../mediaList/Media";

type props = {
  id: string;
};
const Hero = ({ id }: props) => {
  return (
    <S.Container id={id} url={require("../../assets/background.jpg")}>
      <S.Title>
        Hey<S.Span>,</S.Span> I<S.Span>'</S.Span>m Karolis
      </S.Title>
      <S.Subtitle>
        A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the
        success of the overall product
      </S.Subtitle>
      <S.ScrollBtn type="scroll" to="portfolio" text="portfolio" />
      <S.ScrollIndicator>
        <S.ScrollIndicatorItem />
      </S.ScrollIndicator>
      <Media />
    </S.Container>
  );
};

export default Hero;
