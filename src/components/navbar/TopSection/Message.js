import React from "react";
import TopNav from "./TopNav";
import { ReactComponent as CustomPlusIcon } from "../../../resources/MessageIcon.svg";

const Message = () => {
  return <TopNav>{CustomPlusIcon}</TopNav>;
};

export default Message;
