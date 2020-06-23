import styled from "styled-components";
import ListItemIcon from "@material-ui/core/ListItemIcon";
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

`;

export const mListItemIcon = styled(ListItemIcon)`
    background-color: transparent;

    &:hover {
        background-color: transparent;
    }

    &:hover {
        .MuiListItem-root {
            background-color: transparent;
        }
    }

    .MuiListItem-root {
            &:hover {
                background-color: transparent;
            }
        }

    &:hover .MuiListItem-root {
        background-color: transparent;
        &:hover{
            background-color: transparent;
        }
    }
`;

