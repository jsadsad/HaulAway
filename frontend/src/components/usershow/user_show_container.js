import UserShow from './user_show';
import { connect } from 'react-redux';
import {fetchUser} from '../../actions/user_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    userId: ownProps.match.params.userId,
    users: state.entities.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)
