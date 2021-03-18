import { connect } from 'react-redux'
import { updateReview, clearErrors, fetchReview } from '../../actions/review_actions'
import ReviewShow from './review_show'

const mapStateToProps = (state, ownProps) => {
  return {
    // author: state.session.user.id,
    // jobId: ownProps.match.params.jobId,
    reviewId: ownProps.match.params.reviewId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // processForm: (review) => dispatch(updateReview(review)),
    fetchReview: (reviewId) => dispatch(fetchReview(reviewId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewShow)