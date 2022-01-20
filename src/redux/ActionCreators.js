import * as ActionTypes from "./ActionTypes";

// return plain JS object
export const addComment = (dishId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    // keys: parameters passed from function
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  },
});
