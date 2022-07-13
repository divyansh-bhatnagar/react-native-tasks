import { QUOTES_AVAILABLE, ADD_QUOTES, DELETE_QUOTE, UPDATE_QUOTE } from "./actionType";

//Get all quotes
export const getQuotes = (quotes) => {
    return {
        type: ADD_QUOTES,
        payload: quotes()
    }
}

//Add Quotes
export const addQuotes = (quote) => {
    return {
        type: ADD_QUOTES,
        payload: quote
    }
}

//Delete Quotes
export const deleteQuotes = (id) => {
    return {
        type: DELETE_QUOTE,
        payload: id
    }
}

//Update Quotes
export const updateQuotes = (quote) => {
    return {
        type: UPDATE_QUOTE,
        payload: quote
    }
}