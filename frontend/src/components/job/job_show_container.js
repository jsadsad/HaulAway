import { connect } from 'react-redux';
import { fetchJob } from '../../actions/job_actions'
import JobShow from './job_show';

const mSTP = (state, ownProps) => {
  return {
    jobId: ownProps.match.params.jobId,
    jobs: state.entities.jobs
  }
}

const mDTP = dispatch => {
  return {
    fetchJob: jobId => dispatch(fetchJob(jobId))
  }
}

export default connect(mSTP, mDTP)(JobShow);