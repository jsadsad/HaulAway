import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="login-outer-wrap">

        <div className="login-header-wrap">
          <h2>I'm header</h2>
          <div className="login-sections">
            <div className="login-body">
              <div className="login-background">I'm a background</div>
              <div className="login-form-container">

                <h2 className="login-letter">Log In</h2>
                <form className="login-form-box">
                  <br />
                  <div className="login-input-box">
                    <input
                      className="login-input-email"
                      type="text"
                      placeholder="Email"
                    />
                  </div>

                  <br />
                  <div className="login-input-box">
                      <input className="login-input-password" type="password" placeholder="Password"/>
                  </div>
                  <br/>
                  <button className="login-button">Sign In</button>

                </form>
                <br/>
                <div className="singup-link-login-form">
                    <button className="demo-user-button">Demo</button>
                    <div className="signup-new">Create a new account</div>
                </div>

              </div>
            </div>

            <div className="login-footer-wrap">
                <footer className="login-footer">I'm a footer</footer>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
