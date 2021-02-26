import { connect } from 'react-redux';
import { fetchJob, updateJob } from '../../actions/job_actions'
import JobShow from './job_show';

const mSTP = (state, ownProps) => {
  return {
    jobId: ownProps.match.params.jobId,
    jobs: state.entities.jobs,
    currentUserId: state.session.user.id,

  }
}

const mDTP = dispatch => {
  return {
    fetchJob: jobId => dispatch(fetchJob(jobId)),
    updateJob: job => dispatch(updateJob(job))
  }
}

export default connect(mSTP, mDTP)(JobShow);