import {RECEIVE_JOB, RECEIVE_JOBS, DELETE_JOB} from '../actions/job_actions' 

const jobsReducer = (state = {}, action) => {
  Object.freeze(state)
  
  switch(action.type) {
    case RECEIVE_JOBS:
      return Object.assign({}, action.jobs.data)
    case RECEIVE_JOB:
      return Object.assign({}, {[action.job.data._id] : action.job.data})
    case DELETE_JOB:
      let nextState = Object.assign({}, state)
      delete nextState[action.job.data._id] 
      return nextState;
    default: 
      return state
  }
}

export default jobsReducer