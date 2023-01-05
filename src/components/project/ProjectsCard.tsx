import React, { useEffect, useState } from "react";
import * as S from "./ProjectsCard.styles";

type props = {
  image: any; //change type
  title: string;
  text: string;
  to: string | number;
  scrolled: boolean;
  index: number;
};

const ProjectsCard = ({ image, title, text, to, scrolled, index }: props) => {
  const [display, setDisplay] = useState(false);

  //this effect is used to identify when intersepction observer slides to right place and set delay to rendering

  useEffect(() => {
    const delay = index * 700;
    if (scrolled) {
      setTimeout(() => {
        setDisplay(true);
      }, delay);
    }
    return;
  }, [scrolled]);

  return (
    <>
      {display && (
        <S.Container>
          <S.Image src={image} alt="text" />
          <S.InfoWrapper>
            <S.Title>{title}</S.Title>
            <S.Text>{text}</S.Text>
            <S.LinkBtn type="button" to={to} text="Learn more" />
          </S.InfoWrapper>
        </S.Container>
      )}
    </>
  );
};

export default ProjectsCard;
