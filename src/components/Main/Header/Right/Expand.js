import React from 'react'
import * as S from "src/styledComponents/main/header/right/Expand";
import { ReactComponent as ExpandIcon } from "src/resources/Expand.svg";

const Expand = ({ isExpanded, setExpandView }) => {
    
    const handleExpand = () => {
        setExpandView(expand => !expand);
    }

    return (
        <S.Container isexpanded={isExpanded}>
            {isExpanded ?
            <S.Done onClick={() => handleExpand()}>Done</S.Done> : 
            <S.ExpandWrapper onClick={() => handleExpand()} component={ExpandIcon} viewBox="-100 -80 552.054 552.054"/> }
        </S.Container>
    )
}

export default Expand