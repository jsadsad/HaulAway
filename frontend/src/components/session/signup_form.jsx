import React from 'react';
import './signup.css';

class SignupForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '', 
      lastName: '', 
      phoneNumber: '',
      email: '',
      password: '',
      password2: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.errorsOccured = this.errorsOccured.bind(this)
  }

  componentWillUnmount() {
    this.props.clearErrors()
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({[field]: e.target.value})
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


  render() {
    return (
      <div className="signup-outer-wrap">
        <header className="signup-header">
          <div className="signup-header-wrapper">
            <h4>I'll be a link to login form</h4>
          </div>
        </header>
        {/* {this.renderErrors()} */}
        <div className="signup-sections">
          <div className="signup-body">
            <div className="signup-form-container">
              <h2 className="signup-text">Register</h2>
              <form onSubmit={this.handleSubmit}
                    className="signup-form-box">
                <br />
                <div className="signup-input-box">
                  <input onChange={this.update('firstName')}
                    className="signup-input-firstname"
                    type="text"
                    placeholder="First Name"
                    value={this.state.firstName}
                  />
                </div>
                <br />
                <div className="signup-input-box">
                  <input onChange={this.update('lastName')}
                    className="signup-input-lastname"
                    type="text"
                    placeholder="Last Name"
                    value={this.state.lastName}
                  />
                </div>
                <br />
                <div className="signup-input-box">
                  <input onChange={this.update('email')}
                    className="signup-input-email"
                    type="text"
                    placeholder="Email"
                    value={this.state.email}
                  />
                </div>
                <br />
                <div className="signup-input-box">
                  <input onChange={this.update('password')}
                    className="signup-input-password"
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                  />
                </div>
                <br/>
                <div className="signup-input-box">
                  <input onChange={this.update('password2')}
                    className="signup-input-password"
                    type="password"
                    placeholder="Confirm password"
                    value={this.state.password2}
                  />
                </div>
                <br />
                <div className="signup-input-box">
                  <input onChange={this.update('phoneNumber')}
                    className="signup-input-phone"
                    type="tel"
                    placeholder="Phone number"
                  />
                </div>
                <br />
                {/* <div className="signup-input-box">
                  <input
                    className="signup-input-dateOfBirth"
                    type="date"
                    placeholder="Date of birth"
                  />
                </div> */}
                <br />
                <button className="signupt-button">Create an account</button>
              </form>
              <br />
            </div>
          </div>

          {/* <div className="signupt-footer-wrap">
            <footer className="signup-footer">I am a footer</footer>
          </div> */}
        </div>
      </div>
    )
  }
}

export default SignupForm
