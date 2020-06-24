import styled from "styled-components";

export const NoteContainer = styled.div`
    box-sizing: border-box;
    min-height: 120px;
    color: #878787;
    margin: 0;
    vertical-align: baseline;
    text-align: left;
    overflow: hidden;
    transition: opacity 0.2s ease-in-out, height 0.2s ease-in-out, width 0.2s ease-in-out;
    position: relative;
    padding: 3px;
    border: ${ props => props.selected ? "3px solid #d9d9d9" : "3px solid #FFFFFF"};
    cursor: pointer;
`;

export const GeneralInfo = styled.div`
    position: absolute;
    top: 12px;
    right: 24px;
    left: 24px;
    bottom: 15px;
    overflow: hidden;
    word-wrap: break-word;
    color: #878787;
    max-height: 93px;
    box-sizing: border-box;
`;

export const TextSnippet = styled.div`
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    width: 100%;
    height: 84px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    box-sizing: border-box;
`;

export const DateCreated = styled.div`
    margin-right: 96px;
    font-size: 11px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 8px;
    box-sizing: border-box;
    width: 100%;
`;

export const NoteTitle = styled.div`
    transition: color 0.1s ease-in-out, width 0s ease-in-out 0.1s;
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    color: #4a4a4a;
    max-height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    line-height: 20px;
    margin-bottom: 2px;
    padding-bottom: 2px;
`;

export const NoteDivider = styled.div`
    border-top: 1px solid #d9d9d9;
    left: 20px;
    right: 20px;
    top: 0px;
    transform: translateY(-1px);
    z-index: 12;
    position: absolute;
`;
