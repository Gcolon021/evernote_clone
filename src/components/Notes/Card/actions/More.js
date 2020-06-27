import React from 'react'
import { ReactComponent as HorizontalMore } from "../../../../resources/NoteCardMenuBar/TripleDotHorizontal.svg";
import { SvgIcon } from '@material-ui/core';

// viewBox = "0 -3 24 24"
const More = ({ className, viewBox }) => {
    return (
        <SvgIcon component={HorizontalMore} className={className} viewBox={viewBox} />
    )
}

export default More
