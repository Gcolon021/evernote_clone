import { combineReducers } from "redux";
import { noteReducer } from "./Note";

export default combineReducers({
    books: noteReducer,
});
