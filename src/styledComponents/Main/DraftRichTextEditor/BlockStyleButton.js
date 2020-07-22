import styled from "styled-components";

export const CustomButton = styled.div`
cursor: pointer;
display: inline-block;
margin: 5px;
transition: background 0.2s ease-in-out;
vertical-align: top;
height: 17px;
width: 13px;
overflow: hidden;
background-size: 13px 17px;
filter: ${props => props.toggle ? 
"invert(54%) sepia(69%) saturate(452%) hue-rotate(88deg) brightness(96%) contrast(94%)"
: null };
`;