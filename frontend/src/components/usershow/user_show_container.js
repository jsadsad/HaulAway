import UserShow from './user_show';
import { connect } from 'react-redux';
import {fetchUser} from '../../actions/user_actions'
import {fetchUserJobs} from '../../actions/job_actions'
const mapStateToProps = (state, ownProps) => {
  return {
    userId: ownProps.match.params.userId,
    users: state.entities.users,
    jobs: Object.values(state.entities.jobs),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchUserJobs: (userId) => dispatch(fetchUserJobs(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)
