import React from "react";
import NavBarIcons from "../NavBarIcons";
import { ReactComponent as CustomIcon } from "../../../resources/AddMeetingIcon.svg";

const NewMeetingNote = () => {
  return <NavBarIcons isTop="true">{CustomIcon}</NavBarIcons>;
};

export default NewMeetingNote;
