import actionTypes from "../constants/actionTypes";

export const addWarehouseData = (dispatch, data) => {
  return dispatch({
    type: actionTypes.ADD_WAREHOUSE_DATA,
    payload: data,
  });
};

export const editWarehouseData = (dispatch, data) => {
  return dispatch({
    type: actionTypes.EDIT_WAREHOUSE_DATA,
    payload: data,
  });
};
