import styled from "styled-components";

export const NoteContainer = styled.div`
    box-sizing: "border-box";
    min-height: 120px;
    color: #878787;
    margin: 0 auto;
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
    top: 12;
    right: 24;
    left: 24;
    bottom: 15;
    overflow: hidden;
    word-wrap: break-word;
    color: #878787;
`;

export const TextSnippet = styled.div`
    font-size: 12px;
    font-weight: 400;
    line-height: 17px;
`;

export const DateCreated = styled.div`
    margin-right: 96px;
    font-size: 11px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 8px;
`;

export const NoteTitle = styled.div`
    transition: color 0.1s ease-in-out, width 0s ease-in-out 0.1s;
    width: 200px;
    font-size: 16px;
    font-weight: 400;
    color: #4a4a4a;
    max-height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    line-height: 20px;
    margin-bottom: 4px;
`;