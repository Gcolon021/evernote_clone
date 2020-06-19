import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ReactLogo from "../../React-icon.svg";

// Top Section
import AddNote from "./TopSection/AddNote";
import NewMeetingNote from "./TopSection/NewMeetingNote";
import SearchNoteBook from "./TopSection/SearchNoteBook";
import Message from "./TopSection/Message";

// Bottom Section
import Notes from "./BottomSection/Notes";
import ShortCuts from "./BottomSection/ShortCuts";
import Notebooks from "./BottomSection/Notebooks";
import Tags from "./BottomSection/Tags";

const drawerWidth = 43;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    paddingLeft: 17,
    paddingTop: 12,
    paddingRight: 12,
    paddingBottom: 24,
    background: "#f8f8f8",
  },
}));

const NavBar = ({ open }) => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
      open={open}
    >
      <div style={{ height: "58px" }}>
        <img src={ReactLogo} />
      </div>
      <div style={{ marginBottom: "48px" }}>
        <List>
          <AddNote />
          <NewMeetingNote />
          <SearchNoteBook />
          <Message />
        </List>
      </div>
      <div style={{ marginBottom: "48px" }}>
        <List>
          <ShortCuts />
          <Notes />
          <Notebooks />
          <Tags />
        </List>
      </div>
    </Drawer>
  );
};

export default NavBar;
