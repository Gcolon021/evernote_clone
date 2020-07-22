import styled from "styled-components";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const ExpandMore = styled(ExpandMoreIcon)`
    && {
        width: .5em;
        height: .5em;
    }
`;

export const CustomButton = styled.div`
    cursor: pointer;
    display: inline-block;
    margin: 5px;
    transition: background 0.2s ease-in-out;
    vertical-align: top;
`;

export const DropDownMenu = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border: 3px solid rgba(217, 217, 217, 0.4);
    border-top: 1px solid rgba(217, 217, 217, 0.4);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.04),
     -6px 8px 15px rgba(0, 0, 0, 0.04), 
      6px 8px 15px rgba(0, 0, 0, 0.04);
    z-index: 99;
    position: absolute;
`;

export const MenuItemValue = styled.div`
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    color: #606060;
    transition: color 0.1s ease-in-out;
    padding: 9px 15px 10px 5px;
    display: inline-block;
    vertical-align: top;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 201px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    color: inherit;
`;

export const MenuItemCheck = styled.div`

`;

export const MenuItemBtn = styled.div`
    height: 32px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    outline: none;
    transition: background 0.1s ease-in-out;
    padding-right: 20px;
    padding-left: 15px;
    :hover {
        color: #fff;
        background-color: #2dbe60;
    }
`;

export const DropDownBtn = styled.div`
    font-size: 12px;
    margin: 5px;
    font-size: 12px;
    font-weight: 400;
    line-height: 17px;
`;

export const Container = styled.div`
    z-index: 10;
`;