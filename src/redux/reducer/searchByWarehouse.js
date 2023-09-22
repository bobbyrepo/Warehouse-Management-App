import actionTypes from "../constants/actionTypes";

const INIT_STATE = [];

const searchByWarehouseReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_WAREHOUSE_DATA:
      return {
        ...state,
        INIT_STATE: action.payload,
      };

    default:
      return state;
  }
};

export default searchByWarehouseReducer;
