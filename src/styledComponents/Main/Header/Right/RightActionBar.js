import styled from "styled-components";
import { SvgIcon } from "@material-ui/core";

export const Upgrade = styled.button`
    box-sizing: border-box;
    border: 1px solid #ffad17;
    border-radius: 3px;
    background-color: #ffad17;
    color: white;
    line-height: 26px;
    cursor: pointer;
    padding: 0 18px;
    margin-right: 10px;
    display: inline-block;
    font-size: 11px;
    font-weight: 400;
    :active, :focus {
        box-shadow: none;
        outline: 0;
    }
`;

export const Shared = styled(SvgIcon)`
    height: 18px;
    width: 24px;
    margin: 5px 24px 0 0;
    cursor: default;
    transition: opacity 0.001s 0.2s ease-in-out, visibility 0.001s 0.2s, width 0.2s ease-in-out;

    && {
        #isSharedIcon {
            stroke-width: 4;
            stroke: #ababab;
        }
    }
`;

export const LeftSideMargin = styled.div`
    box-sizing: border-box;
    margin-right: 14px;
`;

export const RightActionBar = styled.div`
    display: flex;
    flex-direction: row;
    /* background-color: #ababab; */
    /* opacity: 0.4; */
    float: right;
    margin-left: 20px;
    min-width: 290px;
    min-height: 29px;
`;