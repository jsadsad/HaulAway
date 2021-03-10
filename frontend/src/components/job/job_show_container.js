import { connect } from 'react-redux';
import { fetchJob, updateJob } from '../../actions/job_actions'
import { fetchUser } from '../../actions/user_actions'
import JobShow from './job_show';

const mSTP = (state, ownProps) => {
  
  // debugger
  return {
    jobId: ownProps.match.params.jobId,
    jobs: state.entities.jobs,
    currentUserId: state.session.user.id,
    job: state.entities.jobs[ownProps.match.params.jobId],
    // jobPoster: 

  }
}

const mDTP = dispatch => {
  return {
    fetchJob: jobId => dispatch(fetchJob(jobId)),
    updateJob: job => dispatch(updateJob(job)),
    fetchUser: userId => dispatch(fetchUser(userId))
  }
}

export default connect(mSTP, mDTP)(JobShow);