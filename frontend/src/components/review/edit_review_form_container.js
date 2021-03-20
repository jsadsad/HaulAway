import { connect } from 'react-redux'
import { fetchJobs } from '../../actions/job_actions'
import {
  fetchReview,
  updateReview,
  clearErrors,
  destroyReview,
} from '../../actions/review_actions'
import ReviewEditForm from './edit_review_form'

const mapStateToProps = (state, ownProps) => {
  return {
    formType: 'Edit Review',
    userId: state.session.id,
    currentUser: state.entities.users[state.session.id],
    author: state.session.user,
    jobId: ownProps.match.params.jobId,
    job: state.entities.jobs[ownProps.match.params.jobId],
    review: state.entities.reviews[ownProps.match.params.reviewId],
    reviewId: ownProps.match.params.reviewId,
    errors: state.errors.review,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (review) => dispatch(updateReview(review)),
    clearErrors: () => dispatch(clearErrors()),
    fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
    destroyReview: (reviewId) => dispatch(destroyReview(reviewId)),
    fetchJobs: () => dispatch(fetchJobs()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewEditForm)
