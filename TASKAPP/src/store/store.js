import { combineReducers, createStore } from "redux";
import reducer from "./reducer";

const rootReducer = combineReducers({reducer: reducer});
const Store = createStore(rootReducer);

export default Store;