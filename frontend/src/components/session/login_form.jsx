import React from 'react';
import Navbar from '../navbar/navbar';
import { Link } from 'react-router-dom';
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
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      })
  }

  //need to work on this again
  loginDemo(e) {
    e.preventDefault()
    this.props.loginDemo({
      email: 'ha2@gmail.com',
      password: '123456',
    })
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
      <div className="login-outer-wrap">

        <Navbar />

        <div className="login-header-wrap">
          <div className="login-sections">
            <div className="login-body">
              <div className="login-background">
              </div>
              <div className="login-form-container">
                <form onSubmit={this.handleSubmit}
                   className="login-form-box">
                <div className="login-box-letter">
                  <h2 className="login-letter">Log In</h2>
                </div>
                  <br />
                  <div className="login-input-box">
                    <input onChange={this.handleField('email')}
                      className="login-input-email"
                      type="text"
                      placeholder="Email"
                      value={this.state.email}
                    />
                    <div className="errors">
                      {this.props.errors.email}
                    </div>
                  </div>

                  <br />
                  <div className="login-input-box">
                    <input onChange={this.handleField('password')}
                      className="login-input-password"
                      type="password"
                      placeholder="Password"
                      value={this.state.password}
                    />
                    <div className="errors">
                      {this.props.errors.password}
                    </div>
                  </div>
                  <br />
                  <button className="login-button">Sign In</button>
                  <button className="demo-button">Demo</button>
                  <div className="signup-new"> <Link to="/signup" className="login-link-to-signup">Create a new account</Link></div>
                </form>
                <br />
              </div>
            </div>

            <div className="splash-footer">
                    <div className="splash-footer-wrapper">
                        {/* <div className="thank you-wrap"> */}
                        <div className="thank-you">Thank you for your visit</div>
                        {/* </div> */}
                    <div className="splash-footer-info">
                        <div className="engineerd-by">Engineerd with love by:</div>
                        <div className="info-us">
                        <a className="contact" href="https://github.com/shinara03" target="_blank">Lena</a>
                        <a className="contact" href="https://github.com/andmitriy93" target="_blank">Dmitrii</a>
                        <a className="contact" href="https://github.com/jsadsad" target="_blank">Josh</a>
                        <a className="contact" href="https://github.com/kinda-dev" target="_blank">Fabio</a>
                        </div>
                    </div>
                    </div>
                </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
