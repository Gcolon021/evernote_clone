const defaultState = {
    editorState: null,
};

export const draftReducer = (state = defaultState, { payload, type }) => {
    if (type === 'UPDATE_NOTE_TEXT') {
      return {
        ...state,
        editorState: payload.text,
      };
    }
    return state;
  };