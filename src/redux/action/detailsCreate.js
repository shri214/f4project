import { DETAILS } from "./actionType";

export const details = (data) => {
  return {
    type: DETAILS,
    payload: data,
  };
};
