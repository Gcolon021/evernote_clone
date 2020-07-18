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
