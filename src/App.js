import React from "react";
import NavBar from "./components/navbar";
import NotesSection from "./components/Notes/Top";
import NoteCard from "./components/Notes/Card"
import { NotesColumn } from "./styledComponents/NoteColumn";
import tempData from "./tempData"
import { red } from "@material-ui/core/colors";

const drawerWidth = 73;

function App() {
  const [expandView, setExpandView] = React.useState(true);
  return (
    <div style={{
      display: "flex",
      flexDirection: "row"
    }}>
      <NavBar open={expandView} />
      <div style={{ order: 1 }}>
        <NotesSection drawerOpen={expandView} drawerWidth={drawerWidth} />
        <NotesColumn drawerWidth={drawerWidth}>
          <NoteCard title={tempData.title} date={tempData.date} text={tempData.text} selectedId={1} id={1} />
          <NoteCard title={tempData.title} date={tempData.date} text={tempData.text} selectedId={2} id={1} />
        </NotesColumn>
      </div>
      <div style={{
        backgroundColor: "#dadada",
        width: "100%",
        height: "100vh",
        order: 2,
        overflow: "hidden"
      }}>

      </div>
    </div >
  );
}

export default App;