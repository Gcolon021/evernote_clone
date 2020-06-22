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