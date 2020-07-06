import React from "react";
import NavBar from "src/components/navbar";
import NotesColumnHeader from "src/components/notes/card/top";
import NoteCard from "src/components/notes/card";
import { NotesColumn, NotesColumnContainer } from "src/styledComponents/NoteColumn";
import tempData from "src/tempData";
import Main from "src/components/main";
import { useSelector } from "react-redux";

const drawerwidth = 73;

function App() {
  const [expandView, setExpandView] = React.useState(true);
  const [selectedNote, setSelectedNote] = React.useState(0);
  
  const books = useSelector(state => state.books)

  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
    }}>
      <NavBar open={expandView} drawerwidth={drawerwidth} />
      {expandView ? <NotesColumnContainer drawerwidth={drawerwidth} open={expandView}>
        <NotesColumnHeader noteCount={tempData.length} />
        <NotesColumn drawerwidth={drawerwidth}>
          {books.notebooks[0].notes.map((note, index) => {
            return <NoteCard key={index} id={note.id} setSelected={setSelectedNote} selectedId={selectedNote} title={note.title} dateModified={note.dateCreated} text={note.text.blocks[0].text} />
          })}
        </NotesColumn>
      </NotesColumnContainer> : null}
      <Main isExpanded={expandView} setExpandView={setExpandView} note={null} />
    </div >
  );
}

export default App;