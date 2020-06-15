import React from "react";
import TopNav from "./TopNav";
import { ReactComponent as CustomIcon } from "../../../resources/AddMeetingIcon.svg";

const NewMeetingNote = () => {
  return <TopNav>{CustomIcon}</TopNav>;
};

export default NewMeetingNote;
