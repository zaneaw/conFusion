import * as ActionTypes from "./ActionTypes";

/*
Initially, isLoading is set to true because the dishes array is currently empty.
errMess will only change when it receives a message from the ActionTypes below.
if the data for the dishes array is received correctly, then the array will be 
populated with the info about the dishes.
*/
export const Dishes = (
  state = {
    isLoading: true,
    errMess: null,
    dishes: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_DISHES:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        dishes: action.payload,
      };
    // see below for explanation on ...state
    case ActionTypes.DISHES_LOADING:
      return { ...state, isLoading: true, errMess: null, dishes: [] };

    case ActionTypes.DISHES_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        dishes: [],
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