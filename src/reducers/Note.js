import produce from "immer";
import { initState } from "src/reduxTestData";
import { CONSTANTS } from "src/actions";

export const noteReducer = (state = initState, { payload, type }) => {
    if(type === CONSTANTS.UPDATE_NOTE_TEXT){
      return produce(state, draftState => {
        draftState.notebooks[payload.bookIndex].notes[payload.noteIndex].text = payload.text;
      });
    } else if( type === CONSTANTS.SET_SELECTED_NOTECARD){
      return produce(state, draftState => {
        draftState.selectedNoteInfo.bookIndex = payload.bookIndex;
        draftState.selectedNoteInfo.selectedNoteIndex = payload.noteIndex;
        draftState.selectedNoteInfo.selectedNote = payload.note;
      });
    }
    return state;
  };