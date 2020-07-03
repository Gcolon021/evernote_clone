import React from 'react'
import { ReactComponent as InfoIcon } from "../../../../resources/NoteCardMenuBar/InfoIcon.svg";
import { SvgIcon } from "@material-ui/core";

const info = ({ className, viewBox }) => {
    return (
        <SvgIcon component={InfoIcon} viewBox={viewBox} className={className} />
    )
}

export default info
