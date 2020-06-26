import styled from "styled-components";
import { SvgIcon } from "@material-ui/core";

export const ShortCut = styled(SvgIcon)`
    && {
        fill: transparent;
        stroke: #FFFFFF;
        stroke-width: 2px;
    }

    &&:hover {
        fill: #ffffff;
        stroke: #FFFFFF;
        stroke-width: 2px;
    }
`;