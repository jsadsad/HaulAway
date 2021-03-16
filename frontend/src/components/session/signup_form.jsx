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
     <div className='signup-page-wrapper'>
       <Navbar />
       <div className='signup-form-wrapper'>
          <div className='signup-form-header'>Register</div>
          <form onSubmit={this.handleSubmit} className='signup-form'>
            <div className='signup-input'>
              <input
                  className='signup-input-field'
                  onChange={this.handleField('firstName')}
                  type="text"
                  placeholder="First Name"
                  value={this.state.firstName}
              />
              <div className='signup-errors'>{this.props.errors.firstName}</div>
            </div>
            <div className='signup-input'>
              <input
                  className='signup-input-field'
                  onChange={this.handleField('lastName')}
                  type="text"
                  placeholder="Last Name"
                  value={this.state.lastName}
              />
              <div className="signup-errors">{this.props.errors.lastName}</div>
            </div>
            <div className="signup-input">
              <input
                  className='signup-input-field'
                  onChange={this.handleField('email')}
                  type="text"
                  placeholder="Email"
                  value={this.state.email}
              />
              <div className="signup-errors">{this.props.errors.email}</div>
            </div>
            <div className="signup-input">
              <input
                  className='signup-input-field'
                  onChange={this.handleField('password')}
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
              />
              <div className="signup-errors">{this.props.errors.password}</div>
            </div>
            <div className="signup-input">
              <input
                  className='signup-input-field'
                  onChange={this.handleField('password2')}
                  type="password"
                  placeholder="Confirm password"
                  value={this.state.password2}
              />
              <div className="signup-errors">{this.props.errors.password2}</div>
            </div>
            <div className="signup-input">
                  <input
                    className='signup-input-field'
                    onChange={this.handleField('phoneNumber')}
                    type="tel"
                    placeholder="Phone number"
                  />
              <div className="signup-errors">{this.props.errors.phoneNumber}</div>
            </div>
            <div className='signup-input-file'>
              <label className="signup-photo-label">
                Upload avatar
              </label>
              <input type="file" onChange={this.handlePhotoFile} className="signup-photo-btn"/>
            </div>
            <button className="signup-button">Confirm</button>
          </form>
       </div>
     </div>
    )
  }
}

export default SignupForm


