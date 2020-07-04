import React from 'react'
import * as S from "src/styledComponents/main/header";
import LeftActionBar from "./left/LeftActionBar";
import RightActionBar from "./right/RightActionBar";

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
