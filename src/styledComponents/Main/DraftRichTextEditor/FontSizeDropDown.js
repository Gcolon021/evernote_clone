import styled from "styled-components";

export const StyledUL = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #fff;
`;

export const StyledLi = styled.li`
    float: left;
`;

export const DropDownBtn = styled.div`
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 200px;
    z-index: 1;
`;

export const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;


export const DropDownLi = styled(StyledLi)`
    display: inline-block;
    color: #fff;
    text-align: center;
    padding: 2px;
    text-decoration: none;
    text-align: left;
`;

export const textSpan = styled.span`
    color: black;
    padding: 2px;
    text-decoration: none;
    display: block;
    text-align: left;
`;