import React from 'react'
import * as S from "../../../styledComponents/Notes/Top/NoteCount";

const NoteCount = ({ children }) => {
    return (
        <S.Container>
            <S.NoteCount>
                24 notes
              {children}
            </S.NoteCount>
        </S.Container>
    )
}

export default NoteCount
