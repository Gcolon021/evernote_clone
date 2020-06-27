import React from 'react'
import { ReactComponent as ReminderIcon } from "../../../../resources/NoteCardMenuBar/ClockIcon.svg";
import { SvgIcon } from '@material-ui/core';

const Reminder = ({ className, viewBox }) => {
    return (
        <SvgIcon component={ReminderIcon} className={className} viewBox={viewBox} />
    )
}

export default Reminder
