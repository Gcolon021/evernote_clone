import React from 'react'
import * as S from "../../../styledComponents/Main/Header";
import LeftActionBar from "./LeftActionBar";
import RightActionBar from "./RightActionBar";

const index = () => {
    return (
        <S.Wrapper>
            <S.Container>
                <LeftActionBar />
                <RightActionBar />
            </S.Container>
        </S.Wrapper>
    )
}

export default index
