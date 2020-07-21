import React from 'react'
import * as S from "src/styledComponents/NoteCard/NoteCard";
import MenuBar from "./menuBar/MenuBar";
import useHover from "src/hooks/useHover";
import { setSelectedNoteCard } from "src/actions/Selected";
import { useDispatch } from "react-redux";
import {EditorState, convertFromRaw} from "draft-js";

const Container = ({bookID, note, selectedNoteID, index }) => {
    const dispatch = useDispatch();
    const {title, dateModified, id} = note;
    const [hoverRef, isHovered] = useHover();
    const [date, setDate] = React.useState("");
    const isSelected = selectedNoteID === note.id;
    const MAX_TEXT_COUNT = 200;
    const text = EditorState.createWithContent(convertFromRaw(JSON.parse(note.text))).getCurrentContent().getPlainText();
    const truncText = text != null ? text.substring(0, MAX_TEXT_COUNT).trim() + "..." : "";

    React.useEffect(() => {
        setDate(convertUnixTimeStampToDate(dateModified));
    }, [dateModified]);

    return (
        <S.NoteCardWrapper
            onClick={() => dispatch(setSelectedNoteCard(bookID, id, note))}
            ref={hoverRef}
        >
            {index === 0 || (note.id === selectedNoteID) || isHovered ? null : <S.NoteDivider />}
            <S.NoteContainer selected={isSelected} >
                { isHovered ? <MenuBar /> : null}
                <S.GeneralInfo hover={isHovered}>
                    <S.NoteTitle hover={isHovered}>{isHovered ? title.substring(0,20) + "...": title}</S.NoteTitle>
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


const convertUnixTimeStampToDate = ( unixTimeStamp ) => {
    let dateModified = new Date(unixTimeStamp);
    let currentDate = new Date(Date.now());

    if(dateModified.toLocaleDateString() === currentDate.toLocaleDateString()){
        return "TODAY";
    }

    // One day ago = 86400000 milliseconds
    let minusOneDay = currentDate.getDate() - 2;
    let yesterday = new Date();
    yesterday.setDate(minusOneDay);

    if(yesterday.toLocaleDateString() === dateModified.toLocaleDateString()){
        return "YESTERDAY";
    }

    // 604800000 milliseconds for 1 week
    if(dateModified.valueOf() < (currentDate.valueOf() - 604800000)){
        return dateModified.toLocaleDateString();
    }

    //If its not more than a week ago and more than yesterday it will return days ago.
    return ((currentDate.valueOf() - yesterday.valueOf()) / 86400000) + " DAYS AGO";
}