import React from "react";
import * as S from "./Media.styles";

type props = {
  className?: string;
};

const Media = ({ className }: props) => {
  return (
    <S.MediaContainer className={className}>
      <S.List>
        <S.Link href="https://github.com/karolisposka" target="_blank">
          <S.GitIcon />
        </S.Link>
        <S.Link href="https://www.linkedin.com/in/karolis-po%C5%A1ka-b17344220/" target="_blank">
          <S.LinkedinIcon />
        </S.Link>
      </S.List>
    </S.MediaContainer>
  );
};

export default Media;
