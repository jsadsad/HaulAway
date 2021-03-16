import React from 'react';
import Navbar from '../navbar/navbar_container';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import './login.css';
import '../splash/splash.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.loginDemo = this.loginDemo.bind(this)
    this.errorsOccured = this.errorsOccured.bind(this)
  }

  componentWillUnmount() {
    this.props.clearErrors()
  }

  handleField(field) {
    // this.props.clearErrors()

    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      })
  }

  //need to work on this again
  loginDemo(e) {
    e.preventDefault()
    this.state = {
        email: 'franco@demouser.com',
        password: 'qwerty123456'
    };
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push('/homepage'));
  }

  errorsOccured() {
    return this.props.errors.length !== 0
  }

  handleSubmit(e) {
    e.preventDefault()
    const user = Object.assign({}, this.state)
    this.props.processForm(user)
  }

  render() {
    return (
      <div className='login-outer-wrap'>
        <Navbar />
        <div className='login-form-wrap'>
          <h2 className="sign-in-letters">Sign In</h2>
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <div className="login-input-little-box">
              <input className="login-input-email" placeholder="Email" type="text" value={this.state.email} onChange={this.handleField('email')} />
              <div className="errors">{this.props.errors.email}</div>
            </div>
            <div className="login-input-little-box">
              <input className="login-input-password" placeholder="Password" type="password" value={this.state.password} onChange={this.handleField('password')}/>
              <div className="errors">{this.props.errors.password}</div>
            </div>
            <div className='login-button-container'>
              <div className='login-buttons-wrapper'>
                <button className="login-button" >Sign In</button>
              </div>
              <div className='login-buttons-wrapper'>
                <button onClick={this.loginDemo} className="demo-user-button">Demo User</button>
              </div>
            </div>
          </form>
          <div className="sign-up-link-login-form">
            <div className="sign-up-new">New to HaulAway? <Link className="sign-up-link" to="/signup">Sign up now</Link>.</div>
          </div>
        </div>
        <footer className="login-footer"><Footer /></footer>
      </div>
    )
  }
}

export default LoginForm
