import { connect } from 'react-redux'
import { createReview, clearErrors } from '../../actions/review_actions'
// import LoginForm from './login_form'
import ReviewForm from './review_form'

const mapStateToProps = ({ errors }) => {
  return {
    // errors: Object.values(errors.session),
    errors: errors.session
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (review) => dispatch(createReview(review)),
    clearErrors: () => dispatch(clearErrors()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)