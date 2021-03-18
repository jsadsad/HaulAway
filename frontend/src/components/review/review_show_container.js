import { connect } from 'react-redux'
import { updateReview, clearErrors, fetchReview } from '../../actions/review_actions'
import {fetchUsers} from '../../actions/user_actions'
import {fetchJob} from '../../actions/job_actions'
import {getUserInfo} from '../../selectors/selectors'
import ReviewShow from './review_show'

const mapStateToProps = (state, ownProps) => {
  
  return {
    reviewId: ownProps.match.params.reviewId,
    review: state.entities.reviews[ownProps.match.params.reviewId],
    reviewedUser: getUserInfo(state, ownProps.match.params.userId)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // processForm: (review) => dispatch(updateReview(review)),
    fetchJob: (jobId) => dispatch(fetchJob(jobId)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchReview: (reviewId) => dispatch(fetchReview(reviewId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewShow)