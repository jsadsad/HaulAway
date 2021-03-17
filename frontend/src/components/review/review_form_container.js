import { connect } from 'react-redux'
import { createReview, clearErrors } from '../../actions/review_actions'
import ReviewForm from './review_form'

const mapStateToProps = (state, ownProps) => {
  return {
    author: state.session.user.id,
    jobId: ownProps.match.params.jobId,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (review) => dispatch(createReview(review)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)