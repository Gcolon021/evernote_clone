import React from 'react'
import { ReactComponent as ShareNoteIcon } from "src/resources/noteCardMenuBar/MessageIcon.svg";
import { SvgIcon } from "@material-ui/core";

const ShareNote = ({ className, viewBox }) => {
    return (
        <SvgIcon component={ShareNoteIcon} className={className} viewBox={viewBox} />
    )
}

export default ShareNote