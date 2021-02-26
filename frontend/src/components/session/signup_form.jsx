import React from 'react'
import Navbar from '../navbar/navbar_container'
import { uploadPhoto } from '../../util/photo_api_util'
import './signup.css'
import '../splash/splash.css'

class SignupForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      password: '',
      password2: '',
      profilePic: '',
      selectedFile: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePhotoFile = this.handlePhotoFile.bind(this)
  }

  componentWillUnmount() {
    this.props.clearErrors()
  }

  handleSubmit(e) {
    const capitalize = (s) => {
      if (typeof s !== 'string') return ''
      return s.charAt(0).toUpperCase() + s.slice(1)
    }

    e.preventDefault()

    if (this.state.selectedFile) {
      const data = new FormData(e.target)
      data.append('file', this.state.selectedFile)
      uploadPhoto(data).then((res) => {
        let user = {
          firstName: capitalize(this.state.firstName),
          lastName: capitalize(this.state.lastName),
          phoneNumber: this.state.phoneNumber,
          email: this.state.email,
          profilePic: res.data.newData.Location,
          password: this.state.password,
          password2: this.state.password2,
        }
        this.props.processForm(user)
      })
    } else {
      let user = {
        firstName: capitalize(this.state.firstName),
        lastName: capitalize(this.state.lastName),
        phoneNumber: this.state.phoneNumber,
        email: this.state.email,
        profilePic: this.state.profilePic,
        password: this.state.password,
        password2: this.state.password2,
      }
      this.props.processForm(user)
    }
  }

  handlePhotoFile(e) {
    e.preventDefault()
    this.setState({
      selectedFile: e.target.files[0],
    })
  }

  handleField(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value })
  }

  render() {
    return (
      <div className="signup-outer-wrap">
        <Navbar />

        <div className="signup-sections">
          <div className="signup-body">
            <div className="signup-form-container">
              <h2 className="signup-text">Register</h2>
              <form onSubmit={this.handleSubmit} className="signup-form-box">
                <br />
                <div className="signup-input-box">
                  <input
                    onChange={this.handleField('firstName')}
                    className="signup-input-firstname"
                    type="text"
                    placeholder="First Name"
                    value={this.state.firstName}
                  />
                  <div className="errors">{this.props.errors.firstName}</div>
                </div>
                <br />
                <div className="signup-input-box">
                  <input
                    onChange={this.handleField('lastName')}
                    className="signup-input-lastname"
                    type="text"
                    placeholder="Last Name"
                    value={this.state.lastName}
                  />
                  <div className="errors">{this.props.errors.lastName}</div>
                </div>
                <br />
                <div className="signup-input-box">
                  <input
                    onChange={this.handleField('email')}
                    className="signup-input-email"
                    type="text"
                    placeholder="Email"
                    value={this.state.email}
                  />
                  <div className="errors">{this.props.errors.email}</div>
                </div>
                <br />
                <div className="signup-input-box">
                  <input
                    onChange={this.handleField('password')}
                    className="signup-input-password"
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                  />
                  <div className="errors">{this.props.errors.password}</div>
                </div>
                <br />
                <div className="signup-input-box">
                  <input
                    onChange={this.handleField('password2')}
                    className="signup-input-password"
                    type="password"
                    placeholder="Confirm password"
                    value={this.state.password2}
                  />
                  <div className="errors">{this.props.errors.password2}</div>
                </div>
                <br />
                <div className="signup-input-box">
                  <input
                    onChange={this.handleField('phoneNumber')}
                    className="signup-input-phone"
                    type="tel"
                    placeholder="Phone number"
                  />
                  <div className="errors">{this.props.errors.phoneNumber}</div>
                </div>
                <br />
                <input type="file" onChange={this.handlePhotoFile} className="signup-photo-btn"/>
                {/* <div className="signup-input-box">
                  <input
                    className="signup-input-dateOfBirth"
                    type="date"
                    placeholder="Date of birth"
                  />
                </div> */}

                {/* {this.renderErrors()} */}
                <br/>
                <br/>
                <button className="signup-button">Confirm</button>
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
                  <a
                    className="contact"
                    href="https://github.com/shinara03"
                    target="_blank"
                  >
                    Lena
                  </a>
                  <a
                    className="contact"
                    href="https://github.com/andmitriy93"
                    target="_blank"
                  >
                    Dmitrii
                  </a>
                  <a
                    className="contact"
                    href="https://github.com/jsadsad"
                    target="_blank"
                  >
                    Josh
                  </a>
                  <a
                    className="contact"
                    href="https://github.com/kinda-dev"
                    target="_blank"
                  >
                    Fabio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SignupForm
