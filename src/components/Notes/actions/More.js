import React from 'react'
import { ReactComponent as HorizontalMore } from "src/resources/noteCardMenuBar/TripleDotHorizontal.svg";
import { SvgIcon } from '@material-ui/core';

const More = ({ className, viewBox }) => {
    return (
        <SvgIcon component={HorizontalMore} className={className} viewBox={viewBox} />
    )
}

export default More
