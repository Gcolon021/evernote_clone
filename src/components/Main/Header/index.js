import React from 'react'
import * as S from "../../../styledComponents/Main/Header";
import LeftActionBar from "./Left/LeftActionBar";
import RightActionBar from "./Right/RightActionBar";

const index = ({ isExpanded,setExpandView }) => {
    return (
        <S.Wrapper>
            <S.Container>
                <LeftActionBar />
                <RightActionBar isExpanded={isExpanded} setExpandView={setExpandView}/>
            </S.Container>
        </S.Wrapper>
    )
}

export default index
