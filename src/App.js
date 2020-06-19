import React from "react";
import NavBar from "./components/navbar";
import { makeStyles } from "@material-ui/core/styles";

import Header from "./components/Notes/Header";

const drawerWidth = 73;

const useStyles = makeStyles((theme) => ({
  drawerOpen: {
    marginLeft: drawerWidth,
  },
  drawerClosed: {
    marginLeft: 0,
  },
  notesDiv: {
    display: "block",
    height: "50px",
    verticalAlign: "baseline",
  },
}));

function App() {
  const classes = useStyles();
  const [navBarView, setNavBarView] = React.useState(true);

  return (
    <div>
      <NavBar open={navBarView} />
      <div className={`${classes.drawerOpen}  ${classes.notesDiv}`}>
        <Header />
      </div>
      <div
        className={navBarView ? classes.drawerOpen : classes.drawerClosed}
        style={{ fontSize: "100%", verticalAlign: "baseline" }}
      >
        <div
          style={{
            color: "#878787",
            height: "100%",
            width: "350px",
            overflow: "hidden",
            boxSizing: "border-box",
            position: "relative",
          }}
        >
          hello world
        </div>
      </div>
    </div>
  );
}

export default App;
