import React from "react";
import NavBar from "./components/navbar";
import NotesColumnHeader from "./components/Notes/Top";
import NoteCard from "./components/Notes/Card"
import { NotesColumn, NotesColumnContainer } from "./styledComponents/NoteColumn";
import tempData from "./tempData"
import MainHeader from "./components/Main/Header";

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

      {/* 
      translateX(-423px) wasn't working as intended because the 
      other section wasnt expanding to fill the screen. Maybe come back to it later.
      since I would like to add a nice transform with a ease time.
      */}
      {expandView ? <NotesColumnContainer drawerwidth={drawerwidth} open={expandView}>
        <NotesColumnHeader noteCount={tempData.length} />
        <NotesColumn drawerwidth={drawerwidth}>
          {tempData.map((note, index) => {
            return <NoteCard key={index} id={index} setSelected={setSelectedNote} selectedId={selectedNote} title={note.title} date={note.dateCreated} text={note.text} />
          })}
        </NotesColumn>
      </NotesColumnContainer> : null}

      {/* Main Content Div Starts Here. */}
      <div style={{
        backgroundColor: "#fff",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        borderLeft: "1px solid #ececec",
        position: "relative"
      }}>
        <MainHeader />
        body
      </div>
    </div >
  );
}

export default App;