import { connect } from 'react-redux'
import { login, signup, clearErrors } from '../../actions/session_actions'
import SignupForm from './signup_form'

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    loginDemo: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)
