import React, { useRef, useEffect } from "react";
import * as S from "./Section.styles";

type props = {
  children: React.ReactNode;
  id: string;
  setVisability: React.Dispatch<React.SetStateAction<boolean | boolean>>;
  visability: boolean;
};

const Section = ({ children, id, setVisability, visability }: props) => {
  const options = {
    threshold: 0.5,
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
    <S.Section id={id} style={{ height: "100vh" }} ref={ref}>
      {visability && children}
    </S.Section>
  );
};

export default Section;
