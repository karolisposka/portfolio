import React, { useEffect, useState } from "react";
import * as S from "./ProjectsCard.styles";

type props = {
  image: string;
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
        setTimeout(() => {
          if (index !== 1) {
            const position = window.scrollY;
            window.scrollTo({ top: position + 500, behavior: "smooth" });
          }
        }, 200);
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
            <S.LinkBtn type="link" to={to} text="Learn more" />
          </S.InfoWrapper>
        </S.Container>
      )}
    </>
  );
};

export default ProjectsCard;
