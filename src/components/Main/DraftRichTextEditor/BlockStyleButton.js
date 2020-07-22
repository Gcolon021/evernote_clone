import React from 'react';
import * as S from "src/styledComponents/main/draftRichTextEditor/BlockStyleButton";

const BlockStyleButton = ({ onClick, image}) => {
    const [toggle, setToggle] = React.useState(false);

    const onToggle = () => {
        setToggle(toggle => !toggle);
        onClick();
    }

    return (
        <S.CustomButton
            toggle={toggle}
            onMouseDown={e => e.preventDefault()}
            onClick={onToggle}
            style={{backgroundImage:`url(${image})`}}
        />
    )
}

export default BlockStyleButton
