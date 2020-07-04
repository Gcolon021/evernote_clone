import styled from "styled-components";
import ReminderIcon from "src/components/notes/actions/Reminder";
import DeleteIcon from "src/components/notes/actions/Delete";
import ShortcutIcon from "src/components/notes/actions/Shortcut";
import InfoIcon from "src/components/notes/actions/Info";
import MoreIcon from "src/components/notes/actions/More"

export const Info = styled(InfoIcon)`
    && {
        #info_icon_circle {
            fill: #ababab;
        }

        #info_icon_i {
            stroke: #ababab;
            color: #ababab;
        }
    }

    &&:hover {
        #info_icon_circle {
            fill: #2dbe60;
        }

        #info_icon_i {
            stroke: #2dbe60;
            color: #2dbe60;
        }
    }
`;

export const More = styled(MoreIcon)`
    && {
        #horizontal_more_icon {
            fill: #ababab;
        }
    }

    &&:hover {
        #horizontal_more_icon {
            fill: #2dbe60;
        }
    }
`;

export const Shortcut = styled(ShortcutIcon)`
    && {
        fill: transparent;
        stroke: #ababab;
        stroke-width: 2px;
    }

    &&:hover {
        fill: none;
        stroke: #2dbe60;
        stroke-width: 2px;
    }
`;

export const Delete = styled(DeleteIcon)`
    && #menuBar_trash_outline {
        fill: #ababab;
        stroke: #ababab;
    }

    && #menuBar_trash_bar {
        fill: #ababab;
        stroke: #ababab;
    }

    &&:hover #menuBar_trash_outline {
        fill: #2dbe60;
        stroke: #2dbe60;
    }

    &&:hover #menuBar_trash_bar {
        fill: #2dbe60;
        stroke: #2dbe60;
    }
`;

export const Reminder = styled(ReminderIcon)`
    && {
        /* This is the circle */
        .st0 {
            stroke: #ababab;
            fill: none;
        }
        
        /* This is the bells and feet */
        .st1 {
            stroke: #ababab;
            fill: none;
        }

        /* This is the clock hands */
        .st2 {
            stroke: #ababab;
            fill: none;
        }
    }   
    
    &&:hover {

        .st0 {
            stroke: #2dbe60;
        }

        .st1{
            stroke: #2dbe60;
        }

        .st2 {
            fill: #FFFFFF;
            stroke: #2dbe60;
        }
    }
`;

export const LeftButtonContainer = styled.div`
    display: flex;
    position: relative;
    padding-top: 2px;
    padding-left: 18px;
    transition: opacity 0.2s ease-in-out;
    /* remove in final refactor */
    /* width: 218px; */
    min-height: 26px;
    float: left;
`;

export const ButtonWrapper = styled.div`
    height: 24px;
    width: 24px;
    overflow: hidden;
    display: inline-block;
    margin: 0 16px 0 0;
    cursor: pointer;
`;
