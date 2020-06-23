import React from "react";
import * as S from "../../styledComponents/NavBar/NavBarIcons";
import ListItemIcon from "@material-ui/core/ListItemIcon";

const NavBarIcons = ({ children, section }) => {
  return (
    <S.mListItem button disableGutters disableRipple>
      <ListItemIcon>
        <S.NavBarIcon component={children} />
      </ListItemIcon>
    </S.mListItem>
  );
};

export default NavBarIcons;
