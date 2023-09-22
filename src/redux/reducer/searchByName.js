import actionTypes from "../constants/actionTypes";

const INIT_STATE = [];

const searchByNameReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_BY_NAME:
      return {
        ...state,
        INIT_STATE: action.payload,
      };

    default:
      return state;
  }
};

export default searchByNameReducer;
