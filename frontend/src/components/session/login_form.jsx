import React from 'react';
import Navbar from '../navbar/navbar_container';
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
      <div className="login-outer-wrap">

        <Navbar />
            
        <div className="login-body">
          <div className="login-background"></div>  
            <div className="login-form-container">
              <h2 className="sign-in-letters">Sign In</h2>
                <form onSubmit={this.handleSubmit} className="login-form-box">
                  <br/>
                  <div className="login-input-little-box">
                    <input className="login-input-email" placeholder="Email" type="text" value={this.state.email} onChange={this.handleField('email')} />
                    <div className="errors">{this.props.errors.email}</div>
                  </div>
                  <br/>
                  <div className="login-input-little-box">
                    <input className="login-input-password" placeholder="Password" type="password" value={this.state.password} onChange={this.handleField('password')}/>
                    <div className="errors">{this.props.errors.password}</div>
                  </div>
                  <br/>
                  <button className="login-button" >Sign In</button>
                </form>
                <br/>
                <div className="sing-up-link-login-form">
                  <p className="demo-user-wrap"><button onClick={this.loginDemo} className="demo-user-button">Demo User</button></p>
                  <div className="sign-up-new">New to HaulAway? <Link className="sign-up-link" to="/signup">Sign up now</Link>.</div>
                </div>
            </div>
          <div className="center-pixel"></div>
        </div>

            <div className="splash-footer">
              <div className="splash-footer-wrapper">
                        {/* <div className="thank you-wrap"> */}
                        <div className="thank-you">Thank you for your visit</div>
                        {/* </div> */}
                  <div className="splash-footer-info">
                    <div className="engineerd-by">Engineered with love by:</div>
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
    )
  }
}

export default LoginForm
