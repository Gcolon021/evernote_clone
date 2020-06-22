import React from 'react'
import * as S from "../../../styledComponents/NoteCard";

const Container = ({ title, date, text, selectedId, id }) => {
    const isSelected = selectedId === id;
    return (
        <S.NoteContainer selected={isSelected} >
            <S.GeneralInfo>
                <S.NoteTitle>{title}</S.NoteTitle>
                <S.DateCreated>{date}</S.DateCreated>
                <S.TextSnippet>
                    {text}
                </S.TextSnippet>
            </S.GeneralInfo>
        </S.NoteContainer>
    )
}

export default Container
