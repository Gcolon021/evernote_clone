// import produce from "immer";
import { booksState } from "src/reduxTestData";

const bookReducer = (state = booksState, { payload, type}) => {
    return state;
}

export default bookReducer;