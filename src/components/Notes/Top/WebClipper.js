import React from "react";
import { ReactComponent as SnipIcon } from "../../.././resources/SnippingTool.svg";
import * as S from "../../../styledComponents/Notes/Top/WebClipper";

const WebClipper = () => {
  return (
    <S.Container>
      <S.Button>
        <S.IconWrapper>
          <S.Icon component={SnipIcon} />
        </S.IconWrapper>
        <S.Title>Web Clipper</S.Title>
      </S.Button>
    </S.Container>
  );
};

export default WebClipper;
