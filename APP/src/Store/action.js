import { UPDATE, SELECTED_ITEM, LOGINSUCCESS, LOGOUT } from "./actionType";

export const update = (payload) => {
    return {
        type: UPDATE,
        payload: payload,
    };
}

export const selectedItem = (payload) => {
    return {
        type: SELECTED_ITEM,
        payload: payload,
    };
}

export const loginSuccess = (payload) => {
    return {
        type: LOGINSUCCESS,
        payload: payload,
    };
}

export const logout = () => {
    return {
        type: LOGOUT,
    };
}
