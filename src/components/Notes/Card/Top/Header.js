import React from "react";
import WebClipper from "./WebClipper";
import * as S from "src/styledComponents/noteCard/top/Header";

const Header = () => {
  return (
    <S.Header>
      <S.HeaderTitle>NOTES</S.HeaderTitle>
      <WebClipper />
    </S.Header>
  );
};

export default Header;
