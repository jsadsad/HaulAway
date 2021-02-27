import JobIndex from './job_index'
import { connect } from 'react-redux'
import { fetchJobs } from '../../actions/job_actions'
import { getAvailableJobs } from '../../selectors/selectors'

const mapStateToProps = (state) => {
  debugger
  return {
    jobs: getAvailableJobs(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchJobs: () => dispatch(fetchJobs()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobIndex)
