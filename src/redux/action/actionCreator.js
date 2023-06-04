import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from "./actionType";

import axios from "axios";

export const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST,
  };
};
export const fetchDataSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
};
export const fetchDataFailure = (error) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error,
  };
};

export const fetchData = () => (dispatch) => {
  dispatch(fetchDataRequest());

  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => dispatch(fetchDataSuccess(res.data)))
    .catch((error) => dispatch(fetchDataFailure(error)));
};
