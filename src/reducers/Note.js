import produce from "immer";
import { notesState } from "src/reduxTestData";
import { CONSTANTS } from "src/actions";

const noteReducer = (state = notesState, { payload, type }) => {
  switch(type){
    case CONSTANTS.UPDATE_NOTE_TEXT: {
      return produce(state, draftState => {
        draftState[payload.noteID].text = payload.text;
      });
    }
    case CONSTANTS.UPDATE_NOTE_TITLE: {
      return produce(state, draftState => {
        draftState[payload.noteID].title = payload.title;
      })
    }
    default: return state;
  }
}

export default noteReducer;