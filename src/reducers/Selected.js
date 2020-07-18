import produce from "immer";
import { selectedNoteInfo } from "src/reduxTestData";
import { CONSTANTS } from "src/actions";

const selectedReducer = (state = selectedNoteInfo, { payload, type}) => {
    if( type === CONSTANTS.SET_SELECTED_NOTECARD){
        return produce(state, draftState => {
          draftState.bookID = payload.bookID;
          draftState.noteID = payload.noteID;
          draftState.selectedNote = payload.note;
        });
      }
    return state;
}

export default selectedReducer;