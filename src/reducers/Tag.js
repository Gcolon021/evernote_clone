import produce from "immer";
import { tagsState } from "src/reduxTestData";

const tagReducer = (state = tagsState, { payload, type}) => {
    return state;
}

export default tagReducer;