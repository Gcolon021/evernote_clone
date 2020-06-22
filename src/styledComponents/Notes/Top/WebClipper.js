import styled from "styled-components";
import { SvgIcon } from "@material-ui/core";

export const Container = styled.div`
    position: absolute;
    top: 24px;
    right: 24px;
    z-index: 1;
`;

export const Button = styled.div`
    display: flex;
    border: 1px solid #2dbe60;
    border-radius: 3px;
    background-color: #2dbe60;
    font-size: 11px;
    font-family:  -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif, helvetica, arial, sans-serif;
    font-style: normal;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 27px;
    cursor: pointer;            
`;

export const IconWrapper = styled.div`
    width: 19px;
    height: 19px;
    margin: 0px 8px 0px 5px;
    align-self: center;
    cursor: pointer;
`;

export const Title = styled.div`
    margin-right: 9px;
`;

export const Icon = styled(SvgIcon)`
    width: 19px;
    height: 19px;
`;