import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "../components/zoomedImage/ZoomedImage.styles";

const ZoomedImage = () => {
  const [largeImage, setLargeImage] = useState<string>("");
  const base = process.env.REACT_APP_BASE_URL;
  const { image } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (image) {
      const largeImage = image?.replace("medium", "large");
      setLargeImage(largeImage);
    }
  }, [image]);

  console.log(largeImage);

  return (
    <S.Container image={`${largeImage}`}>
      <S.CloseBtn
        onClick={() => {
          navigate(-1);
        }}
      />
    </S.Container>
  );
};

export default ZoomedImage;
