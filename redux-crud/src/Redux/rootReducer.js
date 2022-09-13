import { combineReducers } from "redux";
import reducer from "./Counter/reducer";
import todoReducer from "./todo/reducer";

const rootReducer = combineReducers({
    counter: reducer,
    todo: todoReducer,
});

export default rootReducer;
