import * as JobApiUtil from '../util/job_util'

export const RECEIVE_JOBS = `RECEIVE_JOBS`
export const RECEIVE_JOB = `RECEIVE_JOB`
export const DELETE_JOB = `DELETE_JOB`

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

export const fetchJobs = () => (dispatch) => {
  return JobApiUtil.fetchAllJobs()
    .then((jobs) => dispatch(receiveJobs(jobs)))
    .catch((error) => console.log(error))
}

export const fetchJob = (jobId) => (dispatch) => {
  return JobApiUtil.fetchAllJobs(jobId)
    .then((job) => dispatch(receiveJobs(job)))
    .catch((error) => console.log(error))
}

export const createJob = (job) => (dispatch) => {
  return JobApiUtil.postJob(job)
    .then((createdJob) => dispatch(receiveJob(createdJob)))
    .catch((error) => console.log(error))
}

export const updateJob = (job) => (dispatch) => {
  return JobApiUtil.updateJob(job)
    .then((updatedJob) => dispatch(receiveJob(updatedJob)))
    .catch((error) => console.log(error))
}

export const destroyJob = (jobId) => (dispatch) => {
  return JobApiUtil.deleteJob(jobId)
    .then(() => dispatch(removeJob(jobId)))
    .catch((error) => console.log(error))
}
