import React from "react";
import TopNav from "./TopNav";
import { ReactComponent as CustomPlusIcon } from "../../../resources/PlusIconGreen.svg";

const AddNote = () => {
  return <TopNav>{CustomPlusIcon}</TopNav>;
};

export default AddNote;
