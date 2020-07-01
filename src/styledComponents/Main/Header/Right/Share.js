import styled from "styled-components"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export const ArrowDropDown = styled(ArrowDropDownIcon)`
    color: #c4c4c4;
    position: relative;
    padding-top: 3px;
`;

export const DropDownContainer = styled.div`
    height: 100%;
    box-sizing: border-box;
    display: inline-block;
    border-left: 1px solid #c4c4c4;
`;

export const Span = styled.span`
    color: #606060;
    font-weight: 400;
    padding: 7px 15px 0;
    height: 100%;
    display: inline-block;
    box-sizing: border-box;
    font-size: 13px;
    vertical-align: top;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
`;

export const ShareContainer = styled.div`
    display: inline-block;
    cursor: pointer;
    vertical-align: top;
    border: 1px solid #c4c4c4;
    border-radius: 4px;
    height: 28px;
    box-sizing: border-box;
`;

export const ShareWrapper = styled.div`
    margin-right: 8px;
    display: inline-block;
    vertical-align: top;
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
`;