import styled from "styled-components";
import SvgIcon from '@material-ui/core/SvgIcon';

export const Reminder = styled(SvgIcon)`
    && {

        /* This is the circle */
        .st0 {
            stroke: #FFFFFF;
            fill: none;
        }
        
        /* This is the bells and feet */
        .st1 {
            stroke: #FFFFFF;
            fill: none;
        }

        /* This is the clock hands */
        .st2 {
            stroke: #FFFFFF;
            fill: none;
        }
    }

    &&:hover {
        .st0{
            fill: #FFFFFF;
        }

        .st1{
            fill: #FFFFFF;
        }

        .st2 {
            fill: #FFFFFF;
            stroke: #2dbe60;
        }
    }
`;