import {
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW,
  DELETE_REVIEW,
} from '../actions/review_actions'

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_REVIEWS:
      return Object.assign({}, action.reviews.data)
    case RECEIVE_REVIEW:
      return Object.assign({}, { [action.review.data._id]: action.review.data })
    case DELETE_REVIEW:
      let nextState = Object.assign({}, state)
      delete nextState[action.review.data._id]
      return nextState
    default:
      return state
  }
}

export default reviewsReducer;