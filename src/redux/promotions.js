import * as ActionTypes from "./ActionTypes";

/*
Initially, isLoading is set to true because the dishes array is currently empty.
errMess will only change when it receives a message from the ActionTypes below.
if the data for the dishes array is received correctly, then the array will be 
populated with the info about the dishes.
*/
export const Promotions = (
  state = {
    isLoading: true,
    errMess: null,
    promotions: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_PROMOS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        promotions: action.payload,
      };

    case ActionTypes.PROMOS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMess: null,
        promotions: [],
      };

    case ActionTypes.PROMOS_FAILED:
      return { ...state, 
        isLoading: false, 
        errMess: action.payload, 
      };

    default:
      return state;
  }
};
