import React from "react";
import * as S from "../../styledComponents/NavBar/NavBarIcons";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItem from "@material-ui/core/ListItem"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "&:hover": { backgroundColor: "transparent" },
  },
}));

const NavBarIcons = ({ children, isTop }) => {
  const classes = useStyles();
  return (
    <ListItem button disableGutters disableRipple className={classes.root}>
      <ListItemIcon>
        <S.NavBarIcon component={children} isTop={isTop} />
      </ListItemIcon>
    </ListItem>
  );
};

export default NavBarIcons;
