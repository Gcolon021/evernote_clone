import styled from "styled-components";

export const NotesColumn = styled.div`
    height: 662px;
    width: 350px;
    margin-left: ${ props => props.drawerWidth}px;
    overflow: hidden scroll;
`;