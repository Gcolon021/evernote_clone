import React from "react";
import NavBar from "src/components/navbar";
import NotesColumnHeader from "src/components/notes/card/top";
import NoteCard from "src/components/notes/card";
import { NotesColumn, NotesColumnContainer } from "src/styledComponents/NoteColumn";
import Main from "src/components/main";
import { connect, useDispatch, useSelector } from "react-redux";
import { setSelectedNoteCard } from "src/actions/Notes";

const drawerwidth = 73;

function App() {
  const dispatch = useDispatch();
  const [expandView, setExpandView] = React.useState(true);
  const books = useSelector(state => state.books);

  const handleSelectedNote = ( bookID, noteID, note ) => {
    dispatch(setSelectedNoteCard(books.notebooks[0].id, noteID, note));
  }

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
            if(books.selectedNoteBook.selectedNote === 0){
              handleSelectedNote(books.notebooks[0].id, note.id, );
            }

            return <NoteCard key={index} id={note.id} setSelected={handleSelectedNote} selectedId={books.selectedNoteBook.selectedNoteID} note={note} />
          })}
        </NotesColumn>
      </NotesColumnContainer> : null}
      <Main isExpanded={expandView} setExpandView={setExpandView} />
    </div >
  );
}

export default connect()(App);