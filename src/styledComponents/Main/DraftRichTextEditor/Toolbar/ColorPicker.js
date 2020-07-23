import styled from "styled-components";
import { CompactPicker } from "react-color";

export const DDBtnColor = styled.div`
    z-index: -1;
    display: inline-block;
    vertical-align: top;
    height: 9px;
    width: 9px;
    margin-top: 4px;
    transition: border-color 0.2s ease-in-out;
    box-sizing: border-box;
    border: 1px solid #e1e1e1;
    :hover {
        border: 1px solid #2dbe60;
    }
`;

export const DropDownBtn = styled.div`
    display: flex;
    flex-direction: row;
    margin: 5px;
    overflow: hidden;
`;

export const DropDownContainer = styled.div`
    cursor: pointer;
    white-space: nowrap;
    vertical-align: baseline;
    box-sizing: border-box;
    height: 17px;
`;

export const ColorPicker = styled(CompactPicker)`
    z-index: 10;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1),
     -6px 8px 15px rgba(0, 0, 0, 0.2), 
      6px 8px 15px rgba(0, 0, 0, 0.2);
    border: 3px solid rgba(217, 217, 217, 0.4);
    border-top: 1px solid rgba(217, 217, 217, 0.4);
`;