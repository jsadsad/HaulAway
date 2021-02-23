import React from 'react';
import './login.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.loginDemo = this.loginDemo.bind(this)
    this.renderErrors = this.renderErrors.bind(this)
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

  renderErrors() {
    if (this.errorsOccured) {
      return (
        <ul>
          {this.props.errors.map((error, idx) => (
            <li key={`error-${idx}`}>
              {' '}
              {error}
              <span
                onClick={() => this.props.clearErrors()}
              >
                &times;
              </span>
            </li>
          ))}
        </ul>
      )
    }
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
        <div className="login-header-wrap">
          {/* <h2>I'm header</h2> */}
          {this.renderErrors()}
          <div className="login-sections">
            <div className="login-body">
              <div className="login-background">
                <h3>background image</h3>
              </div>
              <div className="login-form-container">
                <div className="login-box-letter">
                  <h2 className="login-letter">Log In</h2>
                </div>
                <form onSubmit={this.handleSubmit}
                   className="login-form-box">
                  <br />
                  <div className="login-input-box">
                    <input onChange={this.handleField('email')}
                      className="login-input-email"
                      type="text"
                      placeholder="Email"
                      value={this.state.email}
                    />
                  </div>

                  <br />
                  <div className="login-input-box">
                    <input onChange={this.handleField('password')}
                      className="login-input-password"
                      type="password"
                      placeholder="Password"
                      value={this.state.password}
                    />
                  </div>
                  <br />
                  <button className="login-button">Sign In</button>
                </form>
                <br />
                <div className="singup-link-login-form">
                  <button 
                      className="demo-user-button">Demo</button>
                  <div className="signup-new">Create a new account</div>
                </div>
              </div>
            </div>

            {/* <div className="login-footer-wrap">
              <footer className="login-footer">I'm a footer</footer>
            </div> */}
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
