import { initState } from "src/reduxTestData";

const defaultState = {
    editorState: null,
};

export const draftReducer = (state = initState, { payload, type }) => {
    if (type === 'UPDATE_NOTE_TEXT') {
      return {
        ...state,
        editorState: payload.text,
      };
    }
    return state;
  };