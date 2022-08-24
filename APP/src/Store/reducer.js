import {UPDATE, SELECTED_ITEM, LOGINSUCCESS, LOGOUT} from './actionType';

const initialState = {
  selecteditems: [],
  currentuser: {},
  islogin: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_ITEM:
      const updatedSelectedItems = [...state.selecteditems, action.payload];
      return {
        ...state,
        selecteditems: updatedSelectedItems,
      };
    case LOGINSUCCESS:
      console.log('actionPayload', action.payload)
      return {
        ...state,
        currentuser: action.payload,
        islogin: true,
      };
    case LOGOUT:
      return {
        ...state,
        islogin: false,
        currentuser: {},
      };

    default:
      return state;
  }
};
