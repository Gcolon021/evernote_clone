import React from "react";
import NavBarIcons from "../NavBarIcons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  default: {
    fontSize: "30px",
    background: "#FFFFFF",
    borderRadius: "50%",
    border: "1px solid #E5E5E5",
    "&:hover": {
      background: "#2DBE60",
    },
    "&:hover .search_icon, &:hover .add_meeting_icon, &:hover .notes_icon": {
      fill: "#FFFFFF",
    },
    "&:hover .message_icon, &:hover .plus_icon": {
      fill: "#2DBE60",
      stroke: "#FFFFFF",
    },
  },
  root: {
    "&:hover": { backgroundColor: "transparent" },
  },
}));

const TopNav = ({ children }) => {
  const classes = useStyles();
  return (
    <NavBarIcons classesRoot={classes.root} classesDefault={classes.default}>
      {children}
    </NavBarIcons>
  );
};

export default TopNav;
