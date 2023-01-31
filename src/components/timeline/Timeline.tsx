import React from "react";
import * as S from "./Timeline.styles";

const Timeline = () => {
  return (
    <S.TimelineContainer>
      <S.TimelineComponent>
        <S.TimeDate>2018, October</S.TimeDate>
      </S.TimelineComponent>
      <S.TimelineLine>
        <S.TimelineDot />
      </S.TimelineLine>
      <S.TimelineComponent>
        <S.EventCard>
          <S.CardTitle>Transparency International Lithuanian Chapter</S.CardTitle>
          <S.CardSubtitle>Project Manager</S.CardSubtitle>
          <S.CardParagrapth>
            Analyzed and reported corruption-related data trends to the general public, discussed and raised questions
            about political integrity, academic dishonesty, and public procurement process transparency
          </S.CardParagrapth>
        </S.EventCard>
      </S.TimelineComponent>
      <S.TimelineComponent>
        <S.EventCard>
          <S.CardTitle>Danske Bank A/S</S.CardTitle>
          <S.CardSubtitle>Operations Officer</S.CardSubtitle>
          <S.CardParagrapth>
            Analyzed and reported corruption-related data trends to the general public, discussed and raised questions
            about political integrity, academic dishonesty, and public procurement process transparency
          </S.CardParagrapth>
        </S.EventCard>
      </S.TimelineComponent>
      <S.TimelineLine>
        <S.TimelineDot />
      </S.TimelineLine>
      <S.TimelineComponent>
        <S.TimeDate className="alignLeft">2019, November</S.TimeDate>
      </S.TimelineComponent>
      <S.TimelineComponent>
        <S.TimeDate>2022, February</S.TimeDate>
      </S.TimelineComponent>
      <S.TimelineLine>
        <S.TimelineDot />
      </S.TimelineLine>
      <S.TimelineComponent>
        <S.EventCard>
          <S.CardTitle>Lexita</S.CardTitle>
          <S.CardSubtitle>Front-End engineering intern</S.CardSubtitle>
          <S.CardParagrapth>will be updated soon</S.CardParagrapth>
        </S.EventCard>
      </S.TimelineComponent>
    </S.TimelineContainer>
  );
};

export default Timeline;
