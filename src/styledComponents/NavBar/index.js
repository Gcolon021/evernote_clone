import styled from "styled-components";
import Drawer from "@material-ui/core/Drawer";

export const sDrawer = styled(Drawer)`
    & .MuiDrawer-paper {
        overflow: hidden;
        width: 43px;
        padding: 17px;
        padding-top: 12px;
        padding-right: 12px;
        padding-bottom: 24px;
        background: #f8f8f8;
    }
`;

export const LogoWrapper = styled.div`
    height: 58px;
`;

export const ButtonWrapper = styled.div`
    margin-bottom: 48px;
`;