import {CONSTANTS} from "./index";

export const setSelectedNoteCard = ( bookID, noteID, note) => {
    return {
        type: CONSTANTS.SET_SELECTED_NOTECARD,
        payload: {
            bookID,
            noteID,
            note
        }
    }
}