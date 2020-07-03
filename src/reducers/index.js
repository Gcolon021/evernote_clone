import { combineReducers } from "redux";
import { draftReducer } from "./Draft";

export default combineReducers({
    textEditor: draftReducer,
});
