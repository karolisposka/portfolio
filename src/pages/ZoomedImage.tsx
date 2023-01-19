import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "../components/zoomedImage/ZoomedImage.styles";
import { AES, enc } from "crypto-js";
import Utf8 from "crypto-js/enc-utf8";

const ZoomedImage = () => {
  const [largeImage, setLargeImage] = useState<string>("");
  const passphrase = process.env.REACT_APP_ENCRYPT;
  const { image } = useParams();
  const navigate = useNavigate();

  const decrypt = (cipher: string) => {
    const wordArray = enc.Hex.parse(cipher);
    const toDecrypt = enc.Base64.stringify(wordArray);
    return AES.decrypt(toDecrypt, passphrase).toString(Utf8);
  };

  useEffect(() => {
    if (image) {
      const decryptedImage = decrypt(image);
      console.log(decryptedImage);
      const largeImage = decryptedImage?.replace("medium", "large");
      setLargeImage(largeImage);
    }
  }, [image]);

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
