import styled from "styled-components";
import ListItem from "@material-ui/core/ListItem";
import { Icon } from "@material-ui/core";

export const NavBarIcon = styled(Icon)`
    box-sizing: border-box;
    font-size: 30px;
    background: #f8f8f8;
    border-radius: 50%;
    border: 1px solid #f8f8f8;
    &:hover {
        border: 1px solid #2dbe60;
        background: #2dbe60;
    }

    &:hover {
        .star_icon,
        .notes_icon,
        .tags_icon,
        .notebook_icon {
            fill: #FFFFFF;
        }
    }

    /* &:hover .star_icon,
    &:hover .notes_icon, 
    &:hover .tags_icon, 
    &:hover .notebook_icon {
        fill: "#FFFFFF",
    } */
`;

export const mListItem = styled(ListItem)`
    &:hover {
        background-color: transparent;
        .MuiListItem-root {
            &:hover {
                background-color: transparent;
            }
        }
    }
`;

