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

  const handleSelectedNote = ( bookID, noteIndex) => {
    dispatch(setSelectedNoteCard(bookID, noteIndex));
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
            console.log(index)
            if(books.selectedNoteBook.selectedNote === 0){
              handleSelectedNote(books.notebooks[0].id, index);
            }

            return <NoteCard key={index} index={index} setSelected={handleSelectedNote} selectedIndex={books.selectedNoteBook.selectedNoteIndex} note={note} />
          })}
        </NotesColumn>
      </NotesColumnContainer> : null}
      <Main isExpanded={expandView} setExpandView={setExpandView} />
    </div >
  );
}

export default connect()(App);