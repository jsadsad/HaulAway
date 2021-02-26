import Homepage from './homepage'
import { connect } from 'react-redux'
import {fetchJobs} from '../../actions/job_actions'

const mapStateToProps = state => {
  return {
    jobs: Object.values(state.entities.jobs)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchJobs: () => dispatch(fetchJobs())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)