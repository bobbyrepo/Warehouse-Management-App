import actionTypes from "../constants/actionTypes";

export const searchByName = (dispatch, data) => {
  return dispatch({
    type: actionTypes.SET_SEARCH_BY_NAME,
    payload: data,
  });
};
