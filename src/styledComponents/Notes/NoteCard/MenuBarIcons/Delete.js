import styled from "styled-components";
import { SvgIcon } from "@material-ui/core";

export const Delete = styled(SvgIcon)`
    && #menuBar_trash_outline {
        fill: #ffffff;
        stroke: #ffffff;
    }

    && #menuBar_trash_bar {
        stroke: transparent;
        fill: transparent;
    }

    &&:hover #menuBar_trash_bar {
        fill: #ffffff;
        stroke: #ffffff;
    }
`;