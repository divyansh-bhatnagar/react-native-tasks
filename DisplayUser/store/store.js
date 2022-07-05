import { createStore, combineReducers, applyMiddleware } from 'redux';
import userReducer from './reducer';

import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    user : userReducer,
});

export default store = createStore(rootReducer, applyMiddleware(thunk));