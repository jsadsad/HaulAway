import { connect } from 'react-redux'
import { createJob, clearErrors } from '../../actions/job_actions'
import JobOfferForm from './job_offer'

const mSTP = ({ errors }) => {
  return {
    errors: errors.job,
  }
}

const mDTP = (dispatch) => {
  return {
    clearErrors: () => dispatch(clearErrors),
    processJobForm: (job) => dispatch(createJob(job)),
  }
}

export default connect(mSTP, mDTP)(JobOfferForm)
