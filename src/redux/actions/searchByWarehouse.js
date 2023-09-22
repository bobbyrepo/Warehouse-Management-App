import actionTypes from "../constants/actionTypes";

export const searchByWarehouse = (dispatch, id) => {
  return dispatch({
    type: actionTypes.SET_WAREHOUSE_DATA,
    payload: id,
  });
};
