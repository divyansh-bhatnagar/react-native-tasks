import { QUOTES_AVAILABLE, ADD_QUOTES, DELETE_QUOTE, UPDATE_QUOTE } from "./actionType";

const initialState = {
    quotes: [],
}

export function dataReducer(state = initialState, action) {
    switch (action.type) {
        case QUOTES_AVAILABLE:
            return {
                ...state,
                quotes: action.payload
            }
        case ADD_QUOTES:
            return {
                ...state,
                quotes: [...state.quotes, action.payload]
            }
        case DELETE_QUOTE:
            return {
                ...state,
                quotes: state.quotes.filter(quote => quote.id !== action.payload)
            }
        case UPDATE_QUOTE:
            return {
                ...state,
                quotes: state.quotes.map(quote => quote.id === action.payload.id ? action.payload : quote)
            }
        default:
            return state;
    }
}

