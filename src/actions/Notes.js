import {CONSTANTS} from "./index";

export const updateNote = (noteID, text) => {
    return {
        type: CONSTANTS.UPDATE_NOTE_TEXT,
        payload: {
            noteID,
            text
        }
    }
}

export const updateNoteTitle = (noteID, title) => {
    return {
        type: CONSTANTS.UPDATE_NOTE_TITLE,
        payload: {
            noteID,
            title
        }
    }
}
