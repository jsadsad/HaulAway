import { connect } from 'react-redux'
import { login, clearErrors } from '../../actions/session_actions'
// import LoginForm from './login_form'
import LoginForm from './login_form'

const mapStateToProps = ({ errors }) => {
  return {
    // errors: Object.values(errors.session),
    errors: errors.session
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    loginDemo: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
