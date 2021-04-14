import { connect } from 'react-redux'
import {fetchReview, destroyReview} from '../../actions/review_actions'
import {fetchUsers, fetchUser} from '../../actions/user_actions'
import {fetchJob} from '../../actions/job_actions'
import {getUserInfo} from '../../selectors/selectors'
import ReviewShow from './review_show'

const mapStateToProps = (state, ownProps) => {
  
  return {
    reviewId: ownProps.match.params.reviewId,
    review: state.entities.reviews[ownProps.match.params.reviewId],
    reviewedUserId: ownProps.match.params.userId,
    reviewedUser: getUserInfo(state, ownProps.match.params.userId),
    users: state.entities.users,
    currentUserId: state.session.user.id,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // processForm: (review) => dispatch(updateReview(review)),
    fetchJob: (jobId) => dispatch(fetchJob(jobId)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
    destroyReview: (reviewId) => dispatch(destroyReview(reviewId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewShow)