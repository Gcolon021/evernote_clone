import React from 'react'
import * as S from "../../../../styledComponents/Main/Header/Right/Expand";
import { ReactComponent as ExpandIcon } from "../../../../resources/Expand.svg";

const Expand = () => {
    return (
        <S.Container>
            <S.ExpandWrapper component={ExpandIcon} viewBox="-100 -80 552.054 552.054"/>
        </S.Container>
    )
}

export default Expand