import React from "react";
import * as S from "./ProjectsCard.styles";

type props = {
  image: any; //change type
  title: string;
  text: string;
};

const ProjectsCard = ({ image, title, text }: props) => {
  return (
    <S.Container>
      <S.Image src={image} alt="text" />
      <S.InfoWrapper>
        <S.Title>{title}</S.Title>
        <S.Text>{text}</S.Text>
        <S.LinkBtn>Learn more</S.LinkBtn>
      </S.InfoWrapper>
    </S.Container>
  );
};

export default ProjectsCard;
