import React from 'react'
import * as S from "src/styledComponents/noteCard/top/NoteCount";

const NoteCount = ({ count, children }) => {
    return (
        <S.Container>
            <S.NoteCount>
                {count} notes {children}
            </S.NoteCount>
        </S.Container>
    )
}

export default NoteCount
