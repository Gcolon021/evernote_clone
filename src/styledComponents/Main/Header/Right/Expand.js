import styled from "styled-components";
import { SvgIcon } from "@material-ui/core";

export const Done = styled.button`
    background-color: #2dbe60;
    border: 1px solid #2dbe60;
    border-radius: inherit;
    height: inherit;
    color: #fff;
    font-size: 13px;
    font-weight: 500;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    padding-left: 15px;
    padding-right: 15px;
    cursor: pointer;

    :active, :hover, :focus {
        background-color: #23944b;
        border: 1px solid #23944b;
        outline: none;
    }
`;

export const ExpandWrapper = styled(SvgIcon)`
    && {
        width: 30px;
        height: auto;
        fill: #2dbe60;
        box-sizing: border-box;
        padding-bottom: 2px;
        cursor: pointer;
    }

    &&:hover {
        fill: #fff;
    }
`;

export const Container = styled.div`
    height: 28px;
    box-sizing: border-box;
    display: inline-block;
    cursor: pointer;
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
    vertical-align: text-bottom;
    margin: 0 16px 0 0;
    border: ${props => props.isexpanded ? "" : "1px solid #2dbe60"} ;
    cursor: pointer;
    border-radius: 4px;
    color: #fff;

    :hover {
        background-color: #2dbe60;
    }
`;