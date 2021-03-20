import { connect } from 'react-redux'
import { fetchJob, updateJob } from '../../actions/job_actions'
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
    job: state.entities.jobs,
    review: state.entities.reviews[ownProps.match.params.reviewId],
    reviewId: ownProps.match.params.reviewId,
    errors: state.errors.review,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    processReview: (review) => dispatch(updateReview(review)),
    processJob: (job) => dispatch(updateJob(job)),
    clearErrors: () => dispatch(clearErrors()),
    fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
    destroyReview: (reviewId) => dispatch(destroyReview(reviewId)),
    fetchJob: (jobId) => dispatch(fetchJob(jobId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewEditForm)
