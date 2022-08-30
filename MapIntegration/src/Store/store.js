import { combineReducers, createStore, applyMiddleware  } from "redux";
import reducer from "./reducer";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({reducer: reducer});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;