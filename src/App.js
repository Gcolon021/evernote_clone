import React from "react";
import NavBar from "src/components/navbar";
import NotesColumnHeader from "src/components/notes/card/top";
import NoteCard from "src/components/notes/card";
import { NotesColumn, NotesColumnContainer } from "src/styledComponents/NoteColumn";
import Main from "src/components/main";
import { connect, useSelector } from "react-redux";

const drawerwidth = 73;

function App() {
  const [expandView, setExpandView] = React.useState(true);
  // const books = useSelector(state => state.books);
  const notes = useSelector(state => state.notes);
  const selected = useSelector(state => state.selected);

  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
    }}>
      <NavBar open={expandView} drawerwidth={drawerwidth} />
      {expandView ? <NotesColumnContainer drawerwidth={drawerwidth} open={expandView}>
        <NotesColumnHeader noteCount={notes.length} />
        <NotesColumn drawerwidth={drawerwidth}>
          {Object.entries(notes).map((note, key) => {
            return <NoteCard key={key} index={key} bookIndex={0} selectedNoteID={selected.noteID} note={note[1]} />
          })}
        </NotesColumn>
      </NotesColumnContainer> : null}
      <Main isExpanded={expandView} setExpandView={setExpandView} />
    </div>
  );
}

export default connect()(App);