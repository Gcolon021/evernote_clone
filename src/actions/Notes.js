import {CONSTANTS} from "./index";

export const updateNote = (id, text) => {
    console.log(text);
    return {
        type: CONSTANTS.UPDATE_NOTE_TEXT,
        payload: {
            text
        }
    }
}