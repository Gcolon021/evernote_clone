import React from 'react'
import { ReactComponent as ShareNoteIcon } from "../../../../resources/NoteCardMenuBar/MessageIcon.svg";
import { SvgIcon } from "@material-ui/core";

//viewBox="0 -1 24 24"
const ShareNote = ({ className, viewBox }) => {
    return (
        <SvgIcon component={ShareNoteIcon} className={className} viewBox={viewBox} />
    )
}

export default ShareNote