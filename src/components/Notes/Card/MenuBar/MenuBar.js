import React from 'react'
import * as S from "../../../../styledComponents/noteCard/MenuBar";
import MenuBarIcon from "./MenuBarIcon";

const MenuBar = () => {
    return (
        <S.Container>
            <MenuBarIcon>
                <S.ShareNote viewBox="0 -1 24 24" />
            </MenuBarIcon>
            <MenuBarIcon>
                <S.Reminder viewBox="3 0 24 30" />
            </MenuBarIcon>
            <MenuBarIcon>
                <S.Shortcut viewBox="3 5 26 24" />
            </MenuBarIcon>
            <MenuBarIcon>
                <S.Delete viewBox="-25 0 488.529 438.529" />
            </MenuBarIcon>
        </S.Container >
    )
}

export default MenuBar
