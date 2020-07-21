import React from "react";
import { ReactComponent as SnipIcon } from "src/resources/SnippingTool.svg";
import * as S from "src/styledComponents/NoteCard/Top/WebClipper";

const WebClipper = () => {
  return (
    <S.Container>
      <S.Button>
        <S.IconWrapper>
          <S.Icon component={SnipIcon} viewBox="0 0 30 30" />
        </S.IconWrapper>
        <S.Title>Web Clipper</S.Title>
      </S.Button>
    </S.Container>
  );
};

export default WebClipper;
