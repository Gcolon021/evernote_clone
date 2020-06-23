import styled from "styled-components";
import { Icon } from "@material-ui/core";

export const NavBarIcon = styled(Icon)`
    && {
        width: 36px;
        height: 36px;
    }
    background: ${ props => props.isTop ? "#FFFFFF" : "#f8f8f8"};
    border-radius: 50%;
    border: ${props => props.isTop ? "1px solid #E5E5E5" : "1px solid #f8f8f8"};
    
    
    &:hover {
        border: 1px solid #2dbe60;
        background: #2dbe60;
    }

    &:hover {
        .star_icon,
        .notes_icon,
        .tags_icon,
        .notebook_icon,
        .search_icon, 
        .add_meeting_icon, 
        .notes_icon {
            fill: #FFFFFF;
        }

        .message_icon,
        .plus_icon {
            fill: #2DBE60;
            stroke: #FFFFFF;
        }
    
    }
`;