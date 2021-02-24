import {
  RECEIVE_JOB_ERRORS,
  CLEAR_JOB_ERRORS
} from '../actions/job_actions';

const _nullErrors = []

const JobErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_JOB_ERRORS:
      return action.errors;
    case CLEAR_JOB_ERRORS:
      return [];
    default:
      return state
  }
}

export default JobErrorsReducer;