import React from "react";
import * as S from "../../styledComponents/NavBar/NavBarIcons";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItem from "@material-ui/core/ListItem"

const NavBarIcons = ({ children, section }) => {
  return (
    <ListItem button disableGutters disableRipple>
      <S.mListItemIcon>
        <S.NavBarIcon component={children} />
      </S.mListItemIcon>
    </ListItem>
  );
};

export default NavBarIcons;
