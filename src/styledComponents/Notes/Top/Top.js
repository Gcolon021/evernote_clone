import styled from "styled-components";

export const Container = styled.div`
    width: 350px;
    margin-left: ${ props => props.drawerOpen ? props.drawerWidth : 0}px;
    transform: ${ props => props.drawerOpen ? "" : "translateX(-350px)"};
`;

export const Top = styled.div`
    height: 50px;
    vertical-align: baseline;
`;

export const Bottom = styled.div`
    color: #878787;
    height: 100%;
    overflow: hidden;
    position: relative;
`;