import axios from 'axios'

export const fetchJobs = () => {
  return axios.get('/api/jobs')
}

export const fetchJob = (jobId) => {
  return axios.get(`/api/jobs/${jobId}`)
}

export const fetchUserJobs = (userId) => {
  return axios.get(`/api/jobs/user/${userId}`)
}

export const postJob = (job) => {
  return axios.post(`/api/jobs`, job)
}

export const updateJob = (job) => {
  return axios.patch(`/api/jobs/${job.id}`, job)
}

export const deleteJob = (jobId) => {
  return axios.delete(`/api/jobs/${jobId}`)
}
