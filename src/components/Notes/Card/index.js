import React from 'react'
import * as S from "src/styledComponents/noteCard/NoteCard";
import MenuBar from "./menuBar/MenuBar";
import useHover from "src/hooks/useHover";

const Container = ({ note, selectedId, setSelected, id }) => {
    const {title, dateModified, text} = note;
    const [hoverRef, isHovered] = useHover();
    const [date, setDate] = React.useState("");
    const isSelected = selectedId === id;
    const maxTextCount = 200;
    const truncText = text.blocks[0].text != null ? text.blocks[0].text.substring(0, maxTextCount) + "..." : "";

    React.useEffect(() => {
        setDate(convertUnixTimeStampToDate(dateModified));
    }, [dateModified]);

    return (
        <S.NoteCardWrapper
            onClick={() => setSelected(0, id, note)}
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