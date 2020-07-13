import produce from "immer";
import { initState } from "src/reduxTestData";
import { CONSTANTS } from "src/actions";

export const noteReducer = (state = initState, { payload, type }) => {
    if(type === CONSTANTS.UPDATE_NOTE_TEXT){
      return produce(state, draftState => {
        // draftState.selectedNoteBook: 
      });
    } else if( type === CONSTANTS.SET_SELECTED_NOTECARD){
      return produce(state, draftState => {
        draftState.selectedNoteBook.bookID = payload.bookID;
        draftState.selectedNoteBook.selectedNoteIndex = payload.noteIndex;
      })
    }
    return state;
  };