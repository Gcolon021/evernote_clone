import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { Icon } from "@material-ui/core";

const NavBarIcons = ({ children, classesRoot, classesDefault }) => {
  return (
    <ListItem button disableGutters disableRipple className={classesRoot}>
      <ListItemIcon>
        <Icon component={children} className={classesDefault} />
      </ListItemIcon>
    </ListItem>
  );
};

export default NavBarIcons;
