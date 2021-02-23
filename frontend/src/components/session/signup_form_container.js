import { connect } from 'react-redux'
import { login, signup, clearErrors } from '../../actions/session_actions'
import SignupForm from './signup_form'

const mapStateToProps = ({ errors }) => {
  return {
    // errors: Object.values(errors.session),
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

// import { connect } from 'react-redux'
// import { login } from '../../actions/session_actions'
// import LoginForm from './login_form'

// const mapStateToProps = (state) => {
//   return {
//     errors: state.errors.session,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     login: (user) => dispatch(login(user)),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
