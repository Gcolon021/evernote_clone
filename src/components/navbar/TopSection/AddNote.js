import React from "react";
import NavBarIcons from "../NavBarIcons";
import { ReactComponent as CustomPlusIcon } from "../../../resources/PlusIconGreen.svg";

const AddNote = () => {
  return <NavBarIcons isTop="true">{CustomPlusIcon}</NavBarIcons>;
};

export default AddNote;
