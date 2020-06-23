import React from "react";
import NavBarIcons from "../NavBarIcons";
import { ReactComponent as CustomPlusIcon } from "../../../resources/MessageIcon.svg";

const Message = () => {
  return <NavBarIcons isTop={true}>{CustomPlusIcon}</NavBarIcons>;
};

export default Message;
