import React from 'react'
import { connect } from 'react-redux'
import { fetchJob, updateJob, clearErrors } from '../../actions/job_actions'
import JobEdit from './job_edit'

const mSTP = (state, ownProps) => {

  return {
    errors: state.errors.job,
    job: state.entities.jobs[ownProps.match.params.jobId],
  }
}

const mDTP = (dispatch) => {
  return {
    updateJob: (job) => dispatch(updateJob(job)),
    fetchJob: (jobId) => dispatch(fetchJob(jobId)),
    clearErrors: () => dispatch(clearErrors),
  }
}

export default connect(mSTP, mDTP)(JobEdit)
