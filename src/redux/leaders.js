import * as ActionTypes from "./ActionTypes";
/*
Initially, isLoading is set to true because the leaders array is currently empty.
errMess will only change when it receives a message from the ActionTypes below.
if the data for the leaders array is received correctly, then the array will be
 populated with the info about the leaders.
*/
export const Leaders = (
  state = {
    isLoading: true,
    errMess: null,
    leaders: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_LEADERS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        leaders: action.payload,
      };
    // see below for explanation on ...state
    case ActionTypes.LEADERS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMess: null,
        leaders: [],
      };

    case ActionTypes.LEADERS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        leaders: [],
      };
    default:
      return state;
  }
};

/*
...state    -
Remember, state is IMMUTABLE!
This takes in the current value of the state and then whatever else I pass in after will
be applied as modifications to the state.
In other words, create a new object from the original state and then make some changes to
that object and then return that object.

*/
