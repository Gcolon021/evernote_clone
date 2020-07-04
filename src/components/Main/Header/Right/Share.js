import React from 'react'
import * as S from "src/styledComponents/main/header/right/Share";
const Share = () => {
    return (
        <S.ShareWrapper>
            <S.ShareContainer>
                <S.Span>Share</S.Span>
                <S.DropDownContainer><S.ArrowDropDown fontSize="small" /></S.DropDownContainer>
            </S.ShareContainer>
        </S.ShareWrapper>
    )
}

export default Share
