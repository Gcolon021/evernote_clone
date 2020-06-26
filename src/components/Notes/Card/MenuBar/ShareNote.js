import React from 'react'
import MenuBarIcon from "./MenuBarIcon";
import { ReactComponent as ShareNoteIcon } from "../../../../resources/NoteCardMenuBar/MessageIcon.svg";
import * as S from "../../../../styledComponents/Notes/NoteCard/MenuBarIcons/ShareNote";

const ShareNote = () => {
    return (
        <MenuBarIcon>
            <S.ShareNote component={ShareNoteIcon} viewBox="0 -1 24 24" />
        </MenuBarIcon>
    )
}

export default ShareNote