import styled from "styled-components";
import { SvgIcon } from "@material-ui/core";

export const ExpandWrapper = styled(SvgIcon)`
    && {
        width: auto;
        height: auto;
        fill: #2dbe60;
        box-sizing: border-box;
        padding-bottom: 2px;
    }

    &&:hover {
        fill: #fff;
    }
`;

export const Container = styled.div`
    height: 28px;
    width: 30px;
    box-sizing: border-box;
    display: inline-block;
    cursor: pointer;
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
    vertical-align: text-bottom;
    margin: 0 16px 0 0;
    padding: 3px 3px;
    border: 1px solid #2dbe60;
    border-radius: 4px;

    :hover {
        background-color: #2dbe60;
    }
`;