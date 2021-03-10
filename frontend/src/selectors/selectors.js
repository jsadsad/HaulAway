export const getAvailableJobs = (state) => {
  return Object.values(state.entities.jobs).filter((job) => job.isAvailable)
}
