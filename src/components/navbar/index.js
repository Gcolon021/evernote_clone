import React from "react";
import * as S from "../../styledComponents/NavBar";
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

const NavBar = ({ open }) => {

  return (
    <S.sDrawer
      drawerWidth={drawerWidth}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <S.LogoWrapper>
        <img src={ReactLogo} />
      </S.LogoWrapper>
      <S.ButtonWrapper>
        <List>
          <AddNote />
          <NewMeetingNote />
          <SearchNoteBook />
          <Message />
        </List>
      </S.ButtonWrapper>
      <S.ButtonWrapper>
        <List>
          <ShortCuts />
          <Notes />
          <Notebooks />
          <Tags />
        </List>
      </S.ButtonWrapper>
    </S.sDrawer>
  );
};

export default NavBar;
