import React from "react";
import NavBar from "./components/navbar";
import { makeStyles } from "@material-ui/core/styles";

import NotesSection from "./components/Notes/Top";
import { red } from "@material-ui/core/colors";

const drawerWidth = 73;

function App() {
  const [expandView, setExpandView] = React.useState(true);
  return (
    <div>
      <NavBar open={expandView} />
      <div>
        <NotesSection drawerOpen={expandView} drawerWidth={drawerWidth} />
        <div style={{
          height: "662px",
          width: "350px",
          marginLeft: drawerWidth,
          overflow: "hidden scroll"
        }}>
          <div style={{
            boxSizing: "border-box",
            minHeight: "120px",
            // backgroundColor: "blue",
            color: "#878787",
            margin: "0 auto",
            textAlign: "left",
            overflow: "hidden",
            position: "relative",
            transition: "opacity 0.2s ease-in-out, height 0.2s ease-in-out, width 0.2s ease-in-out",
            position: "relative",
          }}>
            {/** this section will display the note information */}
            <div style={{
              position: "absolute",
              top: 12,
              right: 24,
              left: 24,
              bottom: 15,
              overflow: "hidden",
              wordWrap: "break-word",
              color: "#878787",
            }}>
              {/* This is note title */}
              <div style={{
                transition: "color 0.1s ease-in-out, width 0s ease-in-out 0.1s",
                width: "200px",
                fontSize: "16px",
                fontWeight: "400",
                color: "#4a4a4a",
                maxHeight: "40px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                wordWrap: "break-word",
                lineHeight: "20px",
                marginBottom: "4px",
              }}>Title</div>
              {/** This section will hold the date */}
              <div style={{
                marginRight: "96px",
                fontSize: "11px",
                fontWeight: 400,
                textTransform: 'uppercase',
                letterSpacing: "1px",
                marginBottom: "8px",
              }}>6/20/2020</div>
              {/* This section will hold a clip of the text in the note */}
              <div style={{
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "17px",
              }}>
                New Inventions
                Plow
                Calendar
                Potters Wheel 6000 B.c.e.
                Bronze 4000 B.c.e.

                Plow improved farming ability. The ability to produce more calories with reduced land and allows greater density of population.
              </div>
            </div>
            {/* End Section */}
            {/** This section is to create a border on the selected note */}
            <div style={{
              zIndex: 10,
              border: "3px solid #d9d9d9",
              width: "100%",
              height: "120px",
              top: "0",
              left: "0",
              position: "absolute",
              boxSizing: "border-box"
            }}></div>
            {/* End section */}

          </div>
          {/* <div style={{ zIndex: 10 }}></div> {/* overlay for buttons */}
          {/* if selected show border. But for now will show by default */}
        </div>
      </div>
    </div >
  );
}

export default App;


// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from "@material-ui/core/Menu"


{/* <Menu>
              <MenuItem>Date Created (oldest first)</MenuItem>
              <MenuItem>Date Created (newest first)</MenuItem>
              <MenuItem>Date Updated (oldest first)</MenuItem>
              <MenuItem>Date Updated (newest first)</MenuItem>
              <MenuItem>Title (ascending)</MenuItem>
              <MenuItem>Title (descending)</MenuItem>
              <MenuItem>By Relevance</MenuItem>
            </Menu> */}