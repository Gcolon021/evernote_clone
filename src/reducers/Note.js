import { initState } from "src/reduxTestData";
import { CONSTANTS } from "src/actions";

export const noteReducer = (state = initState, { payload, type }) => {
    if(type === CONSTANTS.UPDATE_NOTE_TEXT){
      let selectedNoteUpdated = {
        ...state,
        selectedNoteBook: {
          id: payload.bookID,
          selectedNote: {
            ...state.selectedNote,
            text: payload.text
          }
        }
      };

      return {
        ...state,
        selectedNoteBook: {
          id: payload.bookID,
          selectedNoteID: payload.noteID,
          selectedNote: selectedNoteUpdated
        },
        notebooks: [
          ...state.notebooks,
          state.notebooks.find(book => {
            if(book.id === payload.bookID){
              return {
                ...book,
                notes: book.notes.find( note => { 
                if(note.id === payload.noteID){
                  return {
                    ...note,
                    text: payload.text
                  }
                }
                return note;
              })}}

              return book;
            })
        ]
      }
    } else if( type === CONSTANTS.SET_SELECTED_NOTECARD){
      return {
        ...state,
        selectedNoteBook: {
          id: payload.bookID,
          selectedNoteID: payload.noteID,
          selectedNote: payload.note
        }
      }
    }

    return state;
  };