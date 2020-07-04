import React from 'react'
import * as S from "src/styledComponents/main/header/right/RightActionBar";
import { ReactComponent as isSharedIcon } from "src/resources/isSharedIcon.svg";
import Share from "./Share";
import Expand from "./Expand";

const RightActionBar = ({isExpanded, setExpandView}) => {
    return (
        <S.RightActionBar>
            <S.LeftSideMargin />
            <S.Shared component={isSharedIcon} viewBox="0 0 95.353 95.353" />
            <S.Upgrade>Upgrade</S.Upgrade>
            <Share />
            <Expand isExpanded={isExpanded} setExpandView={setExpandView} />
        </S.RightActionBar>
    )
}

export default RightActionBar
