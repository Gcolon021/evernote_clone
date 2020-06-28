import React from 'react'
import * as S from "../../../../styledComponents/Main/Header/Left/LeftActionBar";

const LeftActionBar = () => {
    return (
        <S.LeftButtonContainer>
            <S.ButtonWrapper>
                <S.Reminder viewBox="4 0 24 28" />
            </S.ButtonWrapper>
            <S.ButtonWrapper>
                <S.Shortcut viewBox="3 5 30 24" />
            </S.ButtonWrapper>
            <S.ButtonWrapper>
                <S.Info viewBox="0 0 138 128" />
            </S.ButtonWrapper>
            <S.ButtonWrapper>
                <S.Delete viewBox="-25 0 508.529 438.529" />
            </S.ButtonWrapper>
            <S.ButtonWrapper>
                <S.More viewBox="0 -3 24 24" />
            </S.ButtonWrapper>
        </S.LeftButtonContainer>
    )
}

export default LeftActionBar
