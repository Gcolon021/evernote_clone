import React from "react";
import HeaderTitle from "./HeaderTitle";
import WebClipper from "./WebClipper";

const Header = () => {
  return (
    <div
      style={{
        boxSizing: "border-box",
        paddingLeft: "24px",
        paddingTop: "24px",
        paddingRight: "20px",
        margin: "0",
        textAlign: "left",
        position: "relative",
        width: "350px",
        marginBottom: "-7px",
      }}
    >
      <HeaderTitle />
      <WebClipper />
    </div>
  );
};

export default Header;
