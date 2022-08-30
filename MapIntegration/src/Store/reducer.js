import { GET_LOGIN_DATA } from "./actiontype";

const initialState = {
    accessToken: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_LOGIN_DATA:
            return {
                ...state,
                accessToken: action.payload,
            };
        default:
            return state;
    }
};