import React from "react";
import * as S from "./ProjectsCard.styles";

type props = {
  image: any; //change type
  title: string;
  text: string;
  to: string | number;
  test: boolean;
};

const ProjectsCard = ({ image, title, text, to, test }: props) => {
  return (
    <S.Container test={test}>
      <S.Image src={image} alt="text" />
      <S.InfoWrapper>
        <S.Title>{title}</S.Title>
        <S.Text>{text}</S.Text>
        <S.LinkBtn type="button" to={to} text="Learn more" />
      </S.InfoWrapper>
    </S.Container>
  );
};

export default ProjectsCard;
