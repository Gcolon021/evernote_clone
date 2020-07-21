import styled from "styled-components";

export const Container = styled.div`
    height: 35px;
    border-bottom: 1px solid #ececec;
    display: flex;
    flex-direction: row;
`;

export const Wrapper = styled.div`
    position: relative;
    max-width: 960px;
    min-width: 240px;
    padding: 0 48px;
    margin: 0 auto 38px;
    border: 0;
    outline: 0;
    font: inherit;
    vertical-align: baseline;
`;

export const FontDropDownMenu = styled.div`
    display: inline-block;
`;

export const fontSizeMenu = styled.div`
    display: inline-block;
    position: absolute;
    top: 3px;
    background: #FFFFFF;
    box-shadow: 0 0 2px;
    max-height: 150px;
    overflow-y: scroll;

    ::-webkit-scrollbar { 
        display: none;
    }
`;