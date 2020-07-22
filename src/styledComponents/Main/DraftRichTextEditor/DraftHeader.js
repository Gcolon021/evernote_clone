import styled from "styled-components";

export const ItemCon = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Divider = styled.div`
    border: 1px solid #ececec;
    display: inline-block;
    height: 19px;
    margin: 5px 8px 0;
    vertical-align: top;
`;

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

export const CustomButton = styled.div`
    cursor: pointer;
    display: inline-block;
    margin: 5px;
    transition: background 0.2s ease-in-out;
    vertical-align: top;
    height: 17px;
    width: 13px;
    overflow: hidden;
    background-size: 13px 17px;
`;