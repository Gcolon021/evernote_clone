import React from 'react'
import { NoteContainer, GeneralInfo, TextSnippet, DateCreated, NoteTitle } from "../../../styledComponents/NoteCard";

const Container = ({ title, date, text, selectedId, id }) => {
    const isSelected = selectedId === id;
    return (
        <NoteContainer selected={isSelected} >
            <GeneralInfo>
                <NoteTitle>{title}</NoteTitle>
                <DateCreated>{date}</DateCreated>
                <TextSnippet>
                    {text}
                </TextSnippet>
            </GeneralInfo>
        </NoteContainer>
    )
}

export default Container
