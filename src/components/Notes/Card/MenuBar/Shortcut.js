import React from 'react'
import MenuBarIcon from "./MenuBarIcon";
import { ReactComponent as ShortcutIcon } from "../../../../resources/NoteCardMenuBar/Star.svg";
import * as S from "../../../../styledComponents/Notes/NoteCard/MenuBarIcons/Shortcut";

const Shortcut = () => {
    return (
        <MenuBarIcon>
            <S.ShortCut component={ShortcutIcon} viewBox="3 5 26 24" />
        </MenuBarIcon>
    )
}

export default Shortcut
