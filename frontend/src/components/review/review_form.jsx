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

      this.props.processForm(review)
      .then((review) => {
          if (review) {

            this.props.job.reviews.push(review.author)
            
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
<<<<<<< HEAD
        
        this.props.updateJob(reviewedJob)
          // .then(() => {this.props.history.push(`/homepage`)})
=======
          
          this.props.updateJob(reviewedJob)
        }
>>>>>>> main
      })
          .then((reviewedJob) => {
            if (reviewedJob) {

              const {job, currentUserId} = this.props
              if(job.jobPoster._id === currentUserId) {
                this.props.history.push(`/users/${job.jobTaker}`)
              } else {
                this.props.history.push(`/users/${job.jobPoster._id}`)
              }
            }
            })
              // this.props.history.push(`/homepage`)}
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
}

export default ReviewForm;
