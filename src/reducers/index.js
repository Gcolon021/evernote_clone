import { combineReducers } from "redux";
import noteReducer from "./Note";
import bookReducer from "./Book";
import tagReducer from "./Tag";
import shortcutReducer from "./Shortcut";
import selectedReducer from "./Selected";

export default combineReducers({
    notes: noteReducer,
    books: bookReducer,
    tags: tagReducer,
    shortcuts: shortcutReducer,
    selected: selectedReducer
});
