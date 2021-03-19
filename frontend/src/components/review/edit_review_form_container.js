import { connect } from 'react-redux'
import { updateReview, clearErrors } from '../../actions/review_actions'
import ReviewEditForm from './edit_review_form'

const mapStateToProps = (state, ownProps) => {
  return {
    author: state.session.user.id,
    jobId: ownProps.match.params.jobId,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (review) => dispatch(updateReview(review)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewEditForm)