import React from "react";
import * as S from "./Carsousel.styles";
import { useNavigate, useParams } from "react-router-dom";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { AES, enc } from "crypto-js";
// import Utf8 from "crypto-js/enc-utf8";

import "swiper/css";
import "swiper/css/pagination";

type props = {
  images: any;
};

const Carsousel = ({ images }: props) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const encryptSecret = process.env.REACT_APP_ENCRYPT;

  const encrypt = (plaintext: string) => {
    const encrypted = AES.encrypt(plaintext, encryptSecret).toString();
    const wordArray = enc.Base64.parse(encrypted);
    return enc.Hex.stringify(wordArray);
  };

  return (
    <S.Container>
      <Swiper spaceBetween={16} slidesPerView={1} autoplay={true} pagination={true} modules={[Autoplay, Pagination]}>
        {images &&
          images.data.map((image: any, index: number) => (
            <SwiperSlide key={index}>
              <S.ImageWrapper>
                <S.MainImage src={`${image.attributes.formats.medium.url}`} />
                <S.ZoomIn
                  onClick={() => {
                    const data = encrypt(image.attributes.formats.medium.url);
                    navigate(`/${id}/fullsize/${data}`);
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
