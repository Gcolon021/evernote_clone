import React from "react";
import NavBarIcons from "../NavBarIcons";
import { ReactComponent as CustomPlusIcon } from "../../../resources/SearchIcon.svg";

const SearchNoteBook = () => {
  return <NavBarIcons isTop={true}>{CustomPlusIcon}</NavBarIcons>;
};

export default SearchNoteBook;
