import {CONSTANTS} from "./index";

export const updateNote = (bookID, noteID, text) => {
    return {
        type: CONSTANTS.UPDATE_NOTE_TEXT,
        payload: {
            bookID,
            noteID,
            text
        }
    }
}

export const setSelectedNoteCard = ( bookID, noteID, note ) => {
    return {
        type: CONSTANTS.SET_SELECTED_NOTECARD,
        payload: {
            bookID,
            noteID,
            note
        }
    }
}