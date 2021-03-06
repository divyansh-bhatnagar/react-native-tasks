import {  GET_USER } from "./actionTypes";

const initialState = {
    user: null,
};

export default userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
};