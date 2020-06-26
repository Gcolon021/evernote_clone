import React from 'react'
import MenuBarIcon from "./MenuBarIcon";
import { ReactComponent as DeleteIcon } from "../../../../resources/NoteCardMenuBar/Trash.svg";
import * as S from "../../../../styledComponents/Notes/NoteCard/MenuBarIcons/Delete";

const Delete = () => {
    return (
        <MenuBarIcon>
            <S.Delete component={DeleteIcon} viewBox="-25 0 488.529 438.529" />
        </MenuBarIcon>
    )
}

export default Delete
