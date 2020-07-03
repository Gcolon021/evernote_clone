import React from "react";
import NavBar from "./components/navbar";
import NotesColumnHeader from "./components/Notes/Top";
import NoteCard from "./components/Notes/Card"
import { NotesColumn, NotesColumnContainer } from "./styledComponents/NoteColumn";
import tempData from "./tempData"
import Main from "./components/Main";

const drawerwidth = 73;

function App() {
  const [expandView, setExpandView] = React.useState(true);
  const [selectedNote, setSelectedNote] = React.useState(0)

  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
    }}>
      <NavBar open={expandView} drawerwidth={drawerwidth} />
      {expandView ? <NotesColumnContainer drawerwidth={drawerwidth} open={expandView}>
        <NotesColumnHeader noteCount={tempData.length} />
        <NotesColumn drawerwidth={drawerwidth}>
          {tempData.map((note, index) => {
            return <NoteCard key={index} id={index} setSelected={setSelectedNote} selectedId={selectedNote} title={note.title} date={note.dateCreated} text={note.text} />
          })}
        </NotesColumn>
      </NotesColumnContainer> : null}
        <Main isExpanded={expandView} setExpandView={setExpandView}>
      </Main>
    </div >
  );
}

export default App;