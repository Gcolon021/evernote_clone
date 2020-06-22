import React from "react";
import * as S from "../../styledComponents/NavBar/NavBarIcons";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { Icon } from "@material-ui/core";

const NavBarIcons = ({ children, classesDefault }) => {
  return (
    <S.mListItem button disableGutters disableRipple>
      <ListItemIcon>
        <Icon component={children} className={classesDefault} />
      </ListItemIcon>
    </S.mListItem>
  );
};

export default NavBarIcons;
