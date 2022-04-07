import * as ActionTypes from "./ActionTypes";

export const Signup = (
    state = {
        isLoading: false,
        errMess: null,
        signup: [],
    },
    action
) => {
    switch (action.type) {
        case ActionTypes.SIGNUP_REQUEST:
            return {
                ...state,
                isLoading: true,
                errMess: null,
                signup: action.payload,
            };
        case ActionTypes.SIGNUP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                errMess: null,
            };
        case ActionTypes.SIGNUP_FAILURE:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload,
                signup: [],
            };
            default: return state;
    }
};
