import React, { useRef, useEffect } from "react";
import * as S from "./Section.styles";

type props = {
  children: React.ReactNode;
  id: string;
  setVisability: React.Dispatch<React.SetStateAction<boolean | boolean>>;
  visability: boolean;
  style?: React.CSSProperties;
};

const Section = ({ children, id, setVisability, visability, style }: props) => {
  const options = {
    threshold: 0.5,
    rootMargin: "0px",
  };

  const ref: any = useRef();
  const instance = new IntersectionObserver((entry: any) => {
    const element = entry[0];
    if (element.isIntersecting) {
      setVisability(true);
      instance.unobserve(ref.current);
    }
  }, options);

  useEffect(() => {
    if (ref) {
      instance.observe(ref.current);
    }
  }, []);

  return (
    <S.Container>
      <S.Section id={id} ref={ref} style={style}>
        {visability && children}
      </S.Section>
    </S.Container>
  );
};

export default Section;
