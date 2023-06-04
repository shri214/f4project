import { DETAILS } from "../action/actionType";
let initialState = {};
const detailData = (state = initialState, action) => {
  if (action.type === DETAILS) {
    return {
      data: action.payload,
    };
  }
  return state;
};

export default detailData;
