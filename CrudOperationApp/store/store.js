import { combineReducers, createStore } from "redux";
import { dataReducer } from "./reducer";

const rootReducer = combineReducers({dataReducer});
const store = createStore(rootReducer);
export default store;
