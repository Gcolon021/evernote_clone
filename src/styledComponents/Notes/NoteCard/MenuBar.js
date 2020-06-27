import styled from "styled-components";
import ReminderIcon from "../../../components/Notes/Card/actions/Reminder";
import DeleteIcon from "../../../components/Notes/Card/actions/Delete";
import ShareNoteIcon from "../../../components/Notes/Card/actions/ShareNote";
import ShortcutIcon from "../../../components/Notes/Card/actions/Shortcut";

export const Shortcut = styled(ShortcutIcon)`
    && {
        fill: transparent;
        stroke: #FFFFFF;
        stroke-width: 2px;
    }

    &&:hover {
        fill: #ffffff;
        stroke: #FFFFFF;
        stroke-width: 2px;
    }
`;

export const ShareNote = styled(ShareNoteIcon)`
    && {
        color: transparent;
    }

    &&:hover {
        fill: #FFFFFF !important;
    }
`;

export const Delete = styled(DeleteIcon)`
    && #menuBar_trash_outline {
        fill: #ffffff;
        stroke: #ffffff;
    }

    && #menuBar_trash_bar {
        stroke: transparent;
        fill: transparent;
    }

    &&:hover #menuBar_trash_bar {
        fill: #ffffff;
        stroke: #ffffff;
    }
`;

export const Reminder = styled(ReminderIcon)`
    && {
        
        /* This is the circle */
        .st0 {
            stroke: #FFFFFF;
            fill: none;
        }
        
        /* This is the bells and feet */
        .st1 {
            stroke: #FFFFFF;
            fill: none;
        }

        /* This is the clock hands */
        .st2 {
            stroke: #FFFFFF;
            fill: none;
        }
    }   
    
    &&:hover {

        .st0 {
            fill: #FFFFFF;
        }

        .st1{
            fill: #FFFFFF;
        }

        .st2 {
            fill: #FFFFFF;
            stroke: #2dbe60;
        }
    }
`;

export const Container = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    background-color: transparent;
    right: 0;
    top: 0;
    width: 144px;
    height: 32px;
    box-sizing: border-box;
    transform: translate(3px, -3px);
    z-index: 10;
`;

