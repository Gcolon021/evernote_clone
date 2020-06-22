import styled from "styled-components";
import NavBarIcons from "../../../components/navbar/NavBarIcons";

export const BottomNav = styled(NavBarIcons)`
    font-size: 30px;
    background: #f8f8f8;
    border-radius: 50%;
    border: 1px solid #f8f8f8;
    &:hover {
        border: 1px solid #2dbe60;
        background: #2dbe60;
    }
    &:hover .notes_icon, 
    &:hover .star_icon, 
    &:hover .tags_icon, 
    &:hover .notebook_icon {
        fill: "#FFFFFF",
    }
`;