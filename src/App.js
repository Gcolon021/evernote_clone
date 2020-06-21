import React from "react";
import NavBar from "./components/navbar";
import NotesSection from "./components/Notes/Top";
import NoteCard from "./components/Notes/Card"
import { NotesColumn } from "./styledComponents/NoteColumn";
import tempData from "./tempData"

const drawerWidth = 73;

function App() {
  const [expandView, setExpandView] = React.useState(true);
  return (
    <div>
      <NavBar open={expandView} />
      <div>
        <NotesSection drawerOpen={expandView} drawerWidth={drawerWidth} />
        <NotesColumn drawerWidth={drawerWidth}>
          <NoteCard title={tempData.title} date={tempData.date} text={tempData.text} selectedId={1} id={1} />
          <NoteCard title={tempData.title} date={tempData.date} text={tempData.text} selectedId={2} id={1} />
        </NotesColumn>
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