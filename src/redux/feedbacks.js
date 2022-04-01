import * as ActionTypes from "./ActionTypes";

export const Feedback = (
    state = {
        errMess: null,
        feedback: [],
    },
    action
) => {
    switch (action.type) {
        case ActionTypes.ADD_FEEDBACK:
            return {
                ...state,
                isLoading: false,
                errMess: null,
                feedback: action.payload,
            };

        case ActionTypes.FEEDBACK_FAILED:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload,
                feedback: [],
            };

        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            console.log("STATE: ", state)
            return { ...state, feedback: state.feedback.concat(feedback) };

        default:
            return state;
    }
};
