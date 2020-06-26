import React from 'react'
import * as S from "../../../styledComponents/Notes/Top/NoteCount";

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
