import actionTypes from "../constants/actionTypes";

const INIT_STATE = { cities: [], cluster: [], space: 0 };

const searchByFilterReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_BY_FILTER:
      return {
        ...action.payload,
      };

    default:
      return state;
  }
};

export default searchByFilterReducer;
