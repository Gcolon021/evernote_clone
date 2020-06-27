import React from 'react'
import { ReactComponent as DeleteIcon } from "../../../../resources/NoteCardMenuBar/Trash.svg";
import { SvgIcon } from '@material-ui/core';

const Delete = ({ className, viewBox }) => {
    return (
        <SvgIcon component={DeleteIcon} viewBox={viewBox} className={className} />
    )
}

export default Delete
