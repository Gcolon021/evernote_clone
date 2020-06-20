import React from "react";
import { SvgIcon } from "@material-ui/core";
import { ReactComponent as SnipIcon } from "../../.././resources/SnippingTool.svg";

const WebClipper = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "24px",
        right: "24px",
        zIndex: 1,
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            border: "1px solid #2dbe60",
            borderRadius: "3px",
            backgroundColor: "#2dbe60",
            fontSize: "11px",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif, helvetica, arial, sans-serif",
            fontStyle: "normal",
            fontWeight: "400",
            color: "white",
            lineHeight: "27px",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              width: "19px",
              height: "19px",
              margin: "0 8px 0 5px",
              alignSelf: "center",
              cursor: "pointer",
            }}
          >
            <SvgIcon
              style={{
                width: "19px",
                height: "19px",
              }}
              component={SnipIcon}
            />
          </div>
          <div style={{ marginRight: "9px" }}>Web Clipper</div>
        </div>
      </div>
    </div>
  );
};

export default WebClipper;
