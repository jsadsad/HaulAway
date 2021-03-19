import { connect } from 'react-redux'
import {
  fetchReview,
  updateReview,
  clearErrors,
  deleteReview,
} from '../../actions/review_actions'
import ReviewEditForm from './edit_review_form'

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.review,
    author: state.session.user.id,
    reviewId: ownProps.match.params.reviewId,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (review) => dispatch(updateReview(review)),
    clearErrors: () => dispatch(clearErrors()),
    fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewEditForm)
