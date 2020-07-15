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
  const books = useSelector(state => state.books);

  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
    }}>
      <NavBar open={expandView} drawerwidth={drawerwidth} />
      {expandView ? <NotesColumnContainer drawerwidth={drawerwidth} open={expandView}>
        <NotesColumnHeader noteCount={books.notebooks[0].notes.length} />
        <NotesColumn drawerwidth={drawerwidth}>
          {books.notebooks[0].notes.map((note, index) => {
            return <NoteCard key={index} bookIndex={0} index={index} selectedIndex={books.selectedNoteInfo.selectedNoteIndex} note={note} />
          })}
        </NotesColumn>
      </NotesColumnContainer> : null}
      <Main isExpanded={expandView} setExpandView={setExpandView} />
    </div>
  );
}

export default connect()(App);