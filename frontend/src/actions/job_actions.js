import * as JobApiUtil from '../util/job_api_util'

export const RECEIVE_JOBS = `RECEIVE_JOBS`
export const RECEIVE_JOB = `RECEIVE_JOB`
export const DELETE_JOB = `DELETE_JOB`
export const CLEAR_JOB_ERRORS = 'CLEAR_JOB_ERRORS'
export const RECEIVE_JOB_ERRORS = 'RECEIVE_JOB_ERRORS'

const receiveJobs = (jobs) => {
  return {
    type: RECEIVE_JOBS,
    jobs,
  }
}

const receiveJob = (job) => {
  return {
    type: RECEIVE_JOB,
    job,
  }
}

const removeJob = (jobId) => {
  return {
    type: DELETE_JOB,
    jobId,
  }
}

export const clearErrors = () => {
  return {
    type: CLEAR_JOB_ERRORS,
  }
}

export const receiveJobErrors = (errors) => {
  return {
    type: RECEIVE_JOB_ERRORS,
    errors,
  }
}

export const fetchJobs = () => (dispatch) => {
  return JobApiUtil.fetchAllJobs()
    .then((jobs) => dispatch(receiveJobs(jobs)))
    .catch((error) => dispatch(receiveJobErrors(error.response.data)))
}

export const fetchJob = (jobId) => (dispatch) => {
  return JobApiUtil.fetchJob(jobId)
    .then((job) => dispatch(receiveJob(job)))
    .catch((error) => dispatch(receiveJobErrors(error.response.data)))
}

export const createJob = (job) => (dispatch) => {
  return JobApiUtil.postJob(job)
    .then((createdJob) => dispatch(receiveJob(createdJob)))
    .catch((error) => {
      dispatch(receiveJobErrors(error.response.data))
      return Promise.reject(error)
    })
}

export const updateJob = (job) => (dispatch) => {
  return JobApiUtil.updateJob(job)
    .then((updatedJob) => dispatch(receiveJob(updatedJob)))
    // .catch((error) => dispatch(receiveJobErrors(error.response.data)))
}

export const destroyJob = (jobId) => (dispatch) => {
  return JobApiUtil.deleteJob(jobId)
    .then(() => dispatch(removeJob(jobId)))
    .catch((error) => console.log(error))
    // .catch((error) => dispatch(receiveJobErrors(error.response.data)))
}


export const fetchUserJobs = (userId) => (dispatch) => {
  return JobApiUtil.fetchUserJobs(userId)
    .then((jobs) => dispatch(receiveJobs(jobs)))
    .catch((error) => dispatch(receiveJobErrors(error.response.data)))
}