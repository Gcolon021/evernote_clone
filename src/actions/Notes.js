import {CONSTANTS} from "./index";

export const updateNote = (bookIndex, noteIndex, text) => {
    return {
        type: CONSTANTS.UPDATE_NOTE_TEXT,
        payload: {
            bookIndex,
            noteIndex,
            text
        }
    }
}

export const setSelectedNoteCard = ( bookIndex, noteIndex, note) => {
    return {
        type: CONSTANTS.SET_SELECTED_NOTECARD,
        payload: {
            bookIndex,
            noteIndex,
            note
        }
    }
}