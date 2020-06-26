import React from 'react'
import * as S from "../../../../styledComponents/Notes/NoteCard/MenuBar";
import ShareNote from "./ShareNote";
import Reminder from "./Reminder";
import Shortcut from "./Shortcut";
import Delete from "./Delete";

const MenuBar = () => {
    return (
        <S.Container >
            <ShareNote />
            <Reminder />
            <Shortcut />
            <Delete />
        </S.Container >
    )
}

export default MenuBar
