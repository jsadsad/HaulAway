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
        jobId: this.props.jobId,
        reviewNotAllowed: ''
      }
    this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
      this.props.fetchJob(this.props.jobId)
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

    handleSubmit(e) {
      e.preventDefault()
      if (this.props.job.reviews.includes(this.props.author)) {
        return (this.setState({
          reviewNotAllowed: 'You already reviewed this job'
        }))
      }
      let review = {
        title: this.state.title,
        body: this.state.body,
        rating: this.state.rating,
        author: this.state.author,
        jobId: this.state.jobId
      }
      this.props.processForm(review)
      .then((payload) => {
          if (payload.review) {
            this.props.job.reviews.push(this.props.author)
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
            pictures: this.props.job.pictures
          }
          this.props.updateJob(reviewedJob)
          .then(() => {
            const {job, currentUserId} = this.props
            if(job.jobPoster._id === currentUserId) {
              this.props.history.push(`/users/${job.jobTaker}`)
            } else {
              this.props.history.push(`/users/${job.jobPoster._id}`)
            }
          })
        }
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
                <div className='review-form-error'>{this.props.errors.title}</div>
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
                <div className='review-form-error'>{this.props.errors.rating}</div>
              </div>
                <textarea className="review-body-input"
                          placeholder='This field is not required, but a detailed description
                           of your experience will be very helpful for other users.'
                          onChange={this.handleField('body')}/>
              <div>
                <button className="job-form-btn">Post Review</button>
                <div className="review-validator">{this.state.reviewNotAllowed}</div>
              </div>
            </form>
          </div>
        </div>
      </div>
      )}
}
export default ReviewForm;


