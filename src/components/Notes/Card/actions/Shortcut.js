import React from 'react';
import { ReactComponent as ShortcutIcon } from "../../../../resources/NoteCardMenuBar/Star.svg";
import { SvgIcon } from "@material-ui/core";

// viewBox="3 5 26 24"
const Shortcut = ({ className, viewBox }) => {
    return (
        <SvgIcon component={ShortcutIcon} className={className} viewBox={viewBox} />
    )
}

export default Shortcut
