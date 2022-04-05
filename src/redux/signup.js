import * as ActionTypes from "./ActionTypes";

export const Signup = (
    state = {
        errMess: null,
        signup: [],
    },
    action
) => {
    switch (action.type) {
        case ActionTypes.SIGNUP_REQUEST:
            return {
                ...state,
            }
    }
}
