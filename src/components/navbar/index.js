import React from "react";
import * as S from "src/styledComponents/navBar";
import List from "@material-ui/core/List";
import ReactLogo from "src/resources/React-icon.svg";

// Top Section
import AddNote from "./Top/AddNote";
import NewMeetingNote from "./Top/NewMeetingNote";
import SearchNoteBook from "./Top/SearchNoteBook";
import Message from "./Top/Message";

// Bottom Section
import Notes from "./Bottom/Notes";
import ShortCuts from "./Bottom/ShortCuts";
import Notebooks from "./Bottom/Notebooks";
import Tags from "./Bottom/Tags";

const NavBar = ({ open, drawerwidth }) => {

  return (
    <S.sDrawer
      drawerwidth={drawerwidth}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <S.LogoWrapper>
        <img src={ReactLogo} alt={{}} />
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
