import React from 'react'
import * as S from "../../../styledComponents/NoteCard";

const Container = ({ title, date, text, selectedId, setSelected, id }) => {
    const isSelected = selectedId === id;
    const maxTextCount = 200;
    const truncText = text.substring(0, maxTextCount) + "...";

    return (
        <div style={{ position: "relative", boxSizing: "border-box" }} onClick={() => setSelected(id)}>
            {id === 0 || (id - selectedId) === 1 || (id === selectedId) ? null : <S.NoteDivider />}
            <S.NoteContainer selected={isSelected} >
                <S.GeneralInfo>
                    <S.NoteTitle>{title}</S.NoteTitle>
                    <S.DateCreated>{date}</S.DateCreated>
                    <S.TextSnippet>
                        {truncText}
                    </S.TextSnippet>
                </S.GeneralInfo>
            </S.NoteContainer>
        </div>
    )
}

export default Container
