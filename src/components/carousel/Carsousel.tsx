import React from "react";
import * as S from "./Carsousel.styles";

type props = {
  images: string[];
};

const Carsousel = ({ images }: props) => {
  return <S.Container>{images && images.map((image) => <S.Image src={image} alt="photo" />)}</S.Container>;
};

export default Carsousel;
