import { combineReducers } from 'redux'

import SessionErrorsReducer from './session_errors_reducer'
import JobErrorsReducer from './job_errors_reducer'
import ReviewErrorsReducer from './review_errors_reducer'

export default combineReducers({
  session: SessionErrorsReducer,
  job: JobErrorsReducer,
  review: ReviewErrorsReducer,
})
