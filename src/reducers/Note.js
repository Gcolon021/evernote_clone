import produce from "immer";
import { notesState } from "src/reduxTestData";
import { CONSTANTS } from "src/actions";

const noteReducer = (state = notesState, { payload, type }) => {
    if(type === CONSTANTS.UPDATE_NOTE_TEXT){
      return produce(state, draftState => {
        draftState[payload.noteID].text = payload.text;
      });
    }
    return state;
  };

export default noteReducer;