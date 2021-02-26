import { RECEIVE_REVEIW_ERRORS, CLEAR_REVIEW_ERRORS } from '../actions/review_actions'

const _nullErrors = [];

const ReviewErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state)

  switch(action.type) {
    case RECEIVE_REVEIW_ERRORS:
      return action.errors;
    case CLEAR_REVIEW_ERRORS:
      return [];
    default:
      return state;
  }
}

export default ReviewErrorsReducer;