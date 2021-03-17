import UserShow from './user_show';
import { connect } from 'react-redux';
import {fetchUser, fetchUsers} from '../../actions/user_actions'
import {fetchUserJobs} from '../../actions/job_actions'
import {fetchReviews, destroyReview} from '../../actions/review_actions'
import {openModal} from '../../actions/modal_actions'

const mapStateToProps = (state, ownProps) => {

  return {
    userId: ownProps.match.params.userId,
    currentUserId: state.session.user.id,
    user: state.entities.users[ownProps.match.params.userId],
    // users: state.entities.users,
    jobs: Object.values(state.entities.jobs),
    reviews: Object.values(state.entities.reviews),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    // fetchUsers: () => dispatch(fetchUsers()),
    fetchUserJobs: (userId) => dispatch(fetchUserJobs(userId)),
    fetchReviews: () => dispatch(fetchReviews()),
    openModal: (modal, userId) => dispatch(openModal(modal, userId)),
    destroyReview: (reviewId) => dispatch(destroyReview(reviewId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)
