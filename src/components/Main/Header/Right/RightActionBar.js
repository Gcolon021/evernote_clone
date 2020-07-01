import React from 'react'
import * as S from "../../../../styledComponents/Main/Header/Right/RightActionBar";
import { ReactComponent as isSharedIcon } from "../../../../resources/isSharedIcon.svg";
import Share from "./Share";
import Expand from "./Expand";

const RightActionBar = () => {
    return (
        <S.RightActionBar>
            <S.LeftSideMargin />
            <S.Shared component={isSharedIcon} viewBox="0 0 95.353 95.353" />
            <S.Upgrade>Upgrade</S.Upgrade>
            <Share />
            <Expand />
        </S.RightActionBar>
    )
}

export default RightActionBar
