import styled from "styled-components";

export const NotesColumn = styled.div`
    max-height: calc(100vh - 106px);
    width: 350px;
    overflow-y: scroll;
`;

export const NotesColumnContainer = styled.div`
    margin-left: ${props => props.drawerwidth}px;
`;