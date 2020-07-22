import React from 'react';
import * as S from "src/styledComponents/main/draftRichTextEditor/BlockStyleButton";

const BlockStyleButton = ({ onClick, image}) => {
    return (
        <S.CustomButton
            onMouseDown={e => e.preventDefault()}
            onClick={onClick}
            style={{backgroundImage:`url(${image})`}}
        />
    )
}

export default BlockStyleButton
