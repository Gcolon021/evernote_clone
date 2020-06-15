import React from "react";
import BottomNav from "./BottomNav";
import { ReactComponent as CustomPlusIcon } from "../../../resources/Notes.svg";

const Notes = () => {
  return <BottomNav>{CustomPlusIcon}</BottomNav>;
};

export default Notes;
