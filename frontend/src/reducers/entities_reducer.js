import usersReducer from './users_reducer'
import jobsReducer from './jobs_reducer'
import reviewsReducer from './reviews_reducer'
import { combineReducers } from 'redux'

const entitiesReducer = combineReducers({
  users: usersReducer,
  jobs: jobsReducer,
  reviews: reviewsReducer,
})

export default entitiesReducer
