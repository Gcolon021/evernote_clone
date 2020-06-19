import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  notesTitle: {
    color: "#878787",
    display: "inline-block",
    verticalAlign: "top",
    fontSize: "21px",
    letterSpacing: ".5px",
    textTransform: "uppercase",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    fontWeight: 300,
    lineHeight: "26px",
  },
}));

const HeaderTitle = () => {
  const classes = useStyles();
  return <div className={classes.notesTitle}>NOTES</div>;
};

export default HeaderTitle;
