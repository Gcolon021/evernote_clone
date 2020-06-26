import styled from "styled-components";

export const NotesColumn = styled.div`
    max-height: calc(100vh - 106px);
    width: 350px;
    overflow-y: auto;
`;

export const NotesColumnContainer = styled.div`
    margin-left: ${props => props.drawerwidth}px;
`;