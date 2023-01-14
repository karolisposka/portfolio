import React, { useState, useEffect, useRef } from "react";
import * as S from "./Carsousel.styles";

import "swiper/css";

type props = {
  images: any;
  handleZoom: (image: string) => void;
};

const Carsousel = ({ images, handleZoom }: props) => {
  const base = process.env.REACT_APP_BASE_URL;
  const [selectedImage, setSelectedImage] = useState("");
  const [imageToDisplay, setImageToDisplay] = useState(0);

  const slideLeft = () => {
    const lengthOfImagesArr = images.attributes.carousel.data.length;
    if (imageToDisplay === 0) {
      setImageToDisplay(lengthOfImagesArr - 1);
    } else {
      setImageToDisplay(imageToDisplay - 1);
    }
  };

  const slideRight = () => {
    const lengthOfImagesArr = images.attributes.carousel.data.length;
    if (imageToDisplay === lengthOfImagesArr - 1) {
      setImageToDisplay(0);
    } else {
      setImageToDisplay(imageToDisplay + 1);
    }
  };

  return (
    <S.Container>
      <S.ImageWrapper>
        <S.MainImage src={`${base}${images.attributes.carousel.data[imageToDisplay].attributes.formats.medium.url}`} />
        <S.ZoomIn
          onClick={() => {
            handleZoom(images.attributes.carousel.data[imageToDisplay].attributes.formats.medium.url);
          }}
        />
        <S.ArrowLeftWrapper>
          <S.ArrowLeft
            onClick={() => {
              slideLeft();
            }}
          />
        </S.ArrowLeftWrapper>
        <S.ArrowRightWrapper>
          <S.ArrowRight
            onClick={() => {
              slideRight();
            }}
          />
        </S.ArrowRightWrapper>
      </S.ImageWrapper>
      <S.Pagination>
        {images &&
          images.attributes.carousel.data.map((image: any, index: number) => (
            <S.PatigationItem
              key={index}
              id={image.id}
              onClick={() => {
                setSelectedImage(`${base}${image.attributes.formats.medium.url}`);
              }}
            />
          ))}
      </S.Pagination>
    </S.Container>
  );
};

export default Carsousel;
