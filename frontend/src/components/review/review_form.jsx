import React, { Component } from 'react'
import './review_form.css'
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar_container';
import './review_form.css'



class ReviewForm extends Component {
    constructor(props) {
        super(props);

    this.handleSubmit = this.handleSubmit.bind(this)

    
    }

 

    handleField(field) {
        // this.props.clearErrors()
    
        return (e) =>
          this.setState({
            [field]: e.currentTarget.value,
          })
      }

      handleSubmit(e) {
        e.preventDefault()
        const review = Object.assign({}, this.state)
        this.props.processForm(review)
      }

    render() {
        // const job = this.props.job
        // if (!job) return <h1>here</h1>

        return (
          <div className="review-form-outer-wrap">
            <Navbar />
            
            <div className="review-form-body">
                <div className="review-form-form-container">
                  <h2 className="review-form-letters">Write </h2>
                    <form className="review-form-form-box">
                      <br/>
                      <div className="review-form-input-little-box">
                        <input className="review-form-input-email" placeholder="Email" type="text"  onChange={this.handleField('email')} />
                        {/* <div className="errors">{this.props.errors.email}</div> */}
                      </div>
                      <br/>
                      <div className="review-form-input-little-box">
                        <input className="review-form-input-password" placeholder="Password" type="password" onChange={this.handleField('password')}/>
                        {/* <div className="errors">{this.props.errors.password}</div> */}
                      </div>
                      <br/>
                      <button className="review-form-button" >Sign In</button>
                    </form>
                    <br/>
                    <div className="sing-up-link-review-form-form">
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

export default ReviewForm;
