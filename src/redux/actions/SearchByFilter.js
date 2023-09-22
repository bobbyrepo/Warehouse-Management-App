import actionTypes from "../constants/actionTypes";

export const searchByFilter = (dispatch, data) => {
  return dispatch({
    type: actionTypes.SET_BY_FILTER,
    payload: data,
  });
};
