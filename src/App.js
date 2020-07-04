import React from "react";
import NavBar from "src/components/navbar";
import NotesColumnHeader from "src/components/notes/card/top";
import NoteCard from "src/components/notes/card";
import { NotesColumn, NotesColumnContainer } from "src/styledComponents/NoteColumn";
import tempData from "src/tempData";
import Main from "src/components/main";

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