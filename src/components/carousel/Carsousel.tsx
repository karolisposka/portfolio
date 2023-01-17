import React from "react";
import * as S from "./Carsousel.styles";
import { useNavigate, useParams } from "react-router-dom";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

type props = {
  images: any;
  handleZoom: (image: string) => void;
};

const Carsousel = ({ images }: props) => {
  const base = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <S.Container>
      <Swiper spaceBetween={16} slidesPerView={1} autoplay={true} pagination={true} modules={[Autoplay, Pagination]}>
        {images &&
          images.data.map((image: any, index: number) => (
            <SwiperSlide key={index}>
              <S.ImageWrapper>
                <S.MainImage src={`${base}${image.attributes.formats.medium.url}`} />
                <S.ZoomIn
                  onClick={() => {
                    navigate(`/${id}/fullsize${image.attributes.formats.medium.url}`);
                  }}
                />
              </S.ImageWrapper>
            </SwiperSlide>
          ))}
      </Swiper>
    </S.Container>
  );
};

export default Carsousel;
