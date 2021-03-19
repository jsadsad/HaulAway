import React, { Component } from 'react'
import './review_form.css'
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar_container';
import './review_form.css'



class ReviewForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        title: '', 
        body: '', 
        rating: '', 
        author: this.props.author, 
        jobId: this.props.jobId
      }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleStars = this.handleStars.bind(this)

    
    }

    handleField(field) {
      return (e) =>
        this.setState({
          [field]: e.currentTarget.value,
        })
    }

    handleStars(field, e) {
      debugger
      e.currentTarget.className += "green"
      return (e) =>
        this.setState({
          [field]: e.currentTarget.value,
        })
    }

    handleSubmit(e) {
      e.preventDefault()
      let review = {
        title: this.state.title, 
        body: this.state.body, 
        rating: this.state.rating, 
        author: this.state.author, 
        jobId: this.state.jobId
      }
      this.props.job.reviews.push(this.props.author)

      this.props.processForm(review)
        .then(() => {

        
          const reviewedJob = {
            _id: this.props.jobId,
            reviews: this.props.job.reviews,
            
            description: this.props.job.description,
            destination: this.props.job.destination,
            jobDifficulty: this.props.job.jobDifficulty,
            jobEndDate: this.props.job.jobEndDate,
            jobStartDate: this.props.job.jobStartDate,
            jobType: this.props.job.jobType,
            pickup: this.props.job.pickup,
          }
        
        this.props.updateJob(reviewedJob)
          .then(() => {this.props.history.push(`/homepage`)})
      })
    }
    render() {
      return (
      <div className="review-form-outer-wrap">
        <Navbar />
        <div className="review-form-wrap">
          <div className="review-form-container">
            <h2 className="review-form-header">Write a Review</h2>
            <form className="review-form-box"
                onSubmit={this.handleSubmit} >
              <div className="review-form-inner-box">
                <input className="review-title-input" type="text" 
                      placeholder='Please insert a title'
                      onChange={this.handleField('title')}/>

                <select className='review-form-select'
                onChange={this.handleField('rating')}
                      value={this.state.rating}>
                  <option className="review-form-select-dropdown" value="" disabled defaultValue>
                    Please Select Rating
                  </option>
                  <option className="review-form-select-dropdown" value='5'>&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</option>
                  <option className="review-form-select-dropdown" value='4'>&#x2605;&#x2605;&#x2605;&#x2605;</option>
                  <option className="review-form-select-dropdown" value='3'>&#x2605;&#x2605;&#x2605;</option>
                  <option className="review-form-select-dropdown" value='2'>&#x2605;&#x2605;</option>
                  <option className="review-form-select-dropdown" value='1'>&#x2605;</option>
                </select>


              </div>
                <textarea className="review-body-input" 
                          placeholder='Describe your experience to help other users'
                          onChange={this.handleField('body')}/>
              <div>
                <button className="job-form-btn">Post Review</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    
      )}

    // handleField(field) {
    //     // this.props.clearErrors()
    
    //     return (e) =>
    //       this.setState({
    //         [field]: e.currentTarget.value,
    //       })
    //   }

    //   handleSubmit(e) {
    //     e.preventDefault()
    //     const review = Object.assign({}, this.state)
    //     this.props.processForm(review)
    //   }

    // render() {
    //     // const job = this.props.job
    //     // if (!job) return <h1>here</h1>

    //     return (
    //       <div className="review-form-outer-wrap">
    //         <Navbar />
            
    //         <div className="review-form-body">
    //             <div className="review-form-form-container">
    //               <h2 className="review-form-letters">Write </h2>
    //                 <form className="review-form-form-box">
    //                   <br/>
    //                   <div className="review-form-input-little-box">
    //                     <input className="review-form-input-email" placeholder="Email" type="text"  onChange={this.handleField('email')} />
    //                   </div>
    //                   <br/>
    //                   <div className="review-form-input-little-box">
    //                     <input className="review-form-input-password" placeholder="Password" type="password" onChange={this.handleField('password')}/>
    //                   </div>
    //                   <br/>
    //                   <button className="review-form-button" >Sign In</button>
    //                 </form>
    //                 <br/>
    //                 <div className="sing-up-link-review-form-form">
    //                   <p className="demo-user-wrap"><button onClick={this.loginDemo} className="demo-user-button">Demo User</button></p>
    //                   <div className="sign-up-new">New to HaulAway? <Link className="sign-up-link" to="/signup">Sign up now</Link>.</div>
    //                 </div>
    //             </div>
    //           <div className="center-pixel"></div>
    //         </div>
    
    //             <div className="splash-footer">
    //               <div className="splash-footer-wrapper">
                   
    //                         <div className="thank-you">Thank you for your visit</div>
                   
    //                   <div className="splash-footer-info">
    //                     <div className="engineerd-by">Engineered with love by:</div>
    //                       <div className="info-us">
    //                         <a className="contact" href="https://github.com/shinara03" target="_blank">Lena</a>
    //                         <a className="contact" href="https://github.com/andmitriy93" target="_blank">Dmitrii</a>
    //                         <a className="contact" href="https://github.com/jsadsad" target="_blank">Josh</a>
    //                         <a className="contact" href="https://github.com/kinda-dev" target="_blank">Fabio</a>
    //                       </div>
    //                     </div>
    //                 </div>
    //             </div>
    //       </div>
    //     )
    // }
}

export default ReviewForm;
