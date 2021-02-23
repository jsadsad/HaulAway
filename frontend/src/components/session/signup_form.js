import React from 'react'

class SignupForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '', 
      lastName: '', 
      phoneNumber: '',
      email: '',
      password: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderError = this.renderError.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({[field]: e.target.value})
  }

  renderError() {
    let errors = this.props.errors.map((error,idx) => {
      return <p key={idx}>{error}</p> 
    })

    return errors;
  }

  render() {
    return (
      <div className="signup-outer-wrap">
        <header className="signup-header">
          <h2>I am a header</h2>
          <div className="signup-header-wrapper">
            <h4>I'll be a link to login form</h4>
          </div>
        </header>

        <div className="signup-sections">
          <div className="signup-body">
            <div className="signup-form-container">
              <form className="signup-form-box">
                <br />
                <div className="signup-input-box">
                  <input
                    className="signup-input-firstname"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <br />
                <div className="signup-input-box">
                  <input
                    className="signup-input-lastname"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
                <br />
                <div className="signup-input-box">
                  <input
                    className="signup-input-email"
                    type="text"
                    placeholder="Email"
                  />
                </div>
                <br />
                <div className="signup-input-box">
                  <input
                    className="signup-input-password"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <br />
                <div className="signup-input-box">
                  <input
                    className="signup-input-phone"
                    type="tel"
                    placeholder="Phone number"
                  />
                </div>
                <br />
                <div className="signup-input-box">
                  <input
                    className="signup-input-dateOfBirth"
                    type="date"
                    placeholder="Date of birth"
                  />
                </div>
                <br />
                <button className="signupt-button">Create an account</button>
              </form>
              <br />
            </div>
          </div>

          <div className="signupt-footer-wrap">
            <footer className="signup-footer">I am a footer</footer>
          </div>
        </div>
      </div>
    )
  }
}

export default SignupForm
