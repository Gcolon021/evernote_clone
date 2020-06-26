import React from 'react'
import * as S from "../../../styledComponents/Notes/NoteCard/NoteCard";
import MenuBar from "./MenuBar/MenuBar";
import useHover from "../../../hooks/useHover";

const Container = ({ title, date, text, selectedId, setSelected, id }) => {
    const [hoverRef, isHovered] = useHover();
    const isSelected = selectedId === id;
    const maxTextCount = 200;
    const truncText = text.substring(0, maxTextCount) + "...";

    return (
        <S.NoteCardWrapper
            onClick={() => setSelected(id)}
            ref={hoverRef}
        >
            {id === 0 || (id - selectedId) === 1 || (id === selectedId) ? null : <S.NoteDivider />}
            <S.NoteContainer selected={isSelected} >
                <MenuBar />
                <S.GeneralInfo hover={isHovered}>
                    <S.NoteTitle hover={isHovered}>{title}</S.NoteTitle>
                    <S.DateCreated>{date}</S.DateCreated>
                    <S.TextSnippet>
                        {truncText}
                    </S.TextSnippet>
                </S.GeneralInfo>
            </S.NoteContainer>
        </S.NoteCardWrapper>
    )
}

export default Container
