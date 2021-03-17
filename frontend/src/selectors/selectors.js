export const getAvailableJobs = (state) => {
  return Object.values(state.entities.jobs).filter((job) => job.isAvailable)
}

export const getUserJobs = (state, userId) => {
  // debugger
  return Object.values(state.entities.jobs).filter(job => job.jobTaker === userId || job.jobPoster._id === userId)
}