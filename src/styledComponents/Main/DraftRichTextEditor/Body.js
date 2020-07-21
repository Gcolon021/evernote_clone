import styled from "styled-components";

export const Title = styled.textarea`
    width: 100%;
    border: none;
    outline: none;
    background: none;
    padding: 0;
    font-size: 28px;
    height: 35px;
    font-weight: 300;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: -1;
    word-wrap: break-word;
    text-overflow: ellipsis;
    overflow-wrap: break-word;
    overflow: hidden;
    white-space: nowrap;
    color: #2dbe60;
    background-color: #fff;
`;

export const TitleContainer = styled.div`
    height: 35px;
    position: relative;
`;

export const TitleWrapper = styled.div`
    position: relative;
    margin: 16px 0 13px;
    padding-right: 30px;
`;

export const Container = styled.div`
    position: relative;
    margin: 0 auto;
    max-width: 960px;
    min-width: 240px;
    padding: 0 48px;
    vertical-align: baseline;
    font: inherit;
    color: #000;
`;

export const Wrapper = styled.div`
    overflow: auto;
    zoom: 1;
    margin-top: 89px;
    margin-bottom: 0;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: #fff;
    position: absolute !important;
`;