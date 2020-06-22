import React from "react";
import NavBarIcons from "../NavBarIcons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  default: {
    fontSize: "30px",
    background: "#f8f8f8",
    borderRadius: "50%",
    border: "1px solid #f8f8f8",
    "&:hover": {
      border: "1px solid #2DBE60",
      background: "#2DBE60",
    },
    "&:hover .notes_icon, &:hover .star_icon, &:hover .tags_icon, &:hover .notebook_icon": {
      fill: "#FFFFFF",
    },
  },
}));

const BottomNav = ({ children }) => {
  const classes = useStyles();
  return (
    <NavBarIcons classesDefault={classes.default}>
      {children}
    </NavBarIcons>
  );
};

export default BottomNav;
