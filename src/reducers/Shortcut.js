import produce from "immer";
import { shortcutState } from "src/reduxTestData";

const shortcutReducer = (state = shortcutState, { payload, type}) => {
    return state;
}

export default shortcutReducer;