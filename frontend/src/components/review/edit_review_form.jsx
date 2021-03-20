import React, { Component } from 'react'
import Navbar from '../navbar/navbar_container'

class ReviewEditForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: '',
      rating: '',
      author: this.props.author,
      // jobId: this.props.review.jobId,
      jobId: ''
    }
    this.handleStars = this.handleStars.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillUnmount() {
    this.props.clearErrors()
  }

  componentDidMount() {
    this.props.fetchReview(this.props.match.params.reviewId).then(() => {
      this.setState({jobId: this.props.review.jobId, rating: this.props.review.rating.toString()})
      this.props.fetchJob(this.props.review.jobId)
    })
  }

  handleField(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      })
  }

  handleStars(field, e) {
    e.currentTarget.className += 'green'
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      })
  }

  handleSubmit(e) {
    const { job, review } = this.props

    debugger
    e.preventDefault()
    let updatedReview = {
      _id: review._id,
      title: this.state.title,
      body: this.state.body,
      rating: this.state.rating,
      author: this.state.author.id,
      jobId: this.state.jobId,
    }
    this.props.processReview(updatedReview).then(() => {
      this.props.history.goBack()
    })
  }

  render() {
    const { review, errors } = this.props
    if (!review) return null

    return (
      <div className="review-form-outer-wrap">
        <Navbar />
        <div className="review-form-wrap">
          <div className="review-form-container">
            <h2 className="review-form-header">Edit Your Review</h2>
            <form className="review-form-box" onSubmit={this.handleSubmit}>
              <div className="review-form-inner-box">
                <input
                  className="review-title-input"
                  type="text"
                  defaultValue={review.title}
                  onChange={this.handleField('title')}
                />

                <select
                  className="review-form-select"
                  onChange={this.handleField('rating')}
                  defaultValue={review.rating}
                >
                  <option
                    className="review-form-select-dropdown"
                    value=""
                    disabled
                    defaultValue
                  >
                    Please Select Rating
                  </option>
                  <option className="review-form-select-dropdown" value="5">
                    &#x2605;&#x2605;&#x2605;&#x2605;&#x2605;
                  </option>
                  <option className="review-form-select-dropdown" value="4">
                    &#x2605;&#x2605;&#x2605;&#x2605;
                  </option>
                  <option className="review-form-select-dropdown" value="3">
                    &#x2605;&#x2605;&#x2605;
                  </option>
                  <option className="review-form-select-dropdown" value="2">
                    &#x2605;&#x2605;
                  </option>
                  <option className="review-form-select-dropdown" value="1">
                    &#x2605;
                  </option>
                </select>
              </div>
              <textarea
                className="review-body-input"
                defaultValue={review.body}
                onChange={this.handleField('body')}
              />
              <div>
                <button className="job-form-btn">{this.props.formType}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default ReviewEditForm
