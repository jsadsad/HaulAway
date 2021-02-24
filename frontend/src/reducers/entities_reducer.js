import usersReducer from './users_reducer'
import jobsReducer from './jobs_reducer'
import {combineReducers} from 'redux'

const entitiesReducer = combineReducers({
  users: usersReducer,
  jobs: jobsReducer
})

export default entitiesReducer