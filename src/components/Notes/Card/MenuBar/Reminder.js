import React from 'react'
import MenuBarIcon from "./MenuBarIcon";
import { ReactComponent as ReminderIcon } from "../../../../resources/NoteCardMenuBar/ClockIcon.svg";
import * as S from "../../../../styledComponents/Notes/NoteCard/MenuBarIcons/Reminder";


const Reminder = () => {
    return (
        <MenuBarIcon>
            <S.Reminder component={ReminderIcon} viewBox="3 0 24 30" />
        </MenuBarIcon>
    )
}

export default Reminder
