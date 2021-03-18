import React, { Component } from 'react'
import Navbar from '../navbar/navbar_container';
import './review_show.css'

class ReviewShow extends Component {

  componentDidMount() {
    this.props.fetchReview(this.props.reviewId)
    this.props.fetchUsers()
  }

  render() {
    console.log(this.props.reviewedUser)
    const {review} = this.props
    if(!review) return 'loading'

   return (
    <div className='review-show-wrapper'>
      <Navbar/>
      <div className='review-show-container'>
        <div>
          <label>Author: </label>
          <p></p>
        </div>
        <p>Author</p>
        <p>Title: {review.title}</p>
        <p>Rating: {review.rating}</p>
        <p>Body: {review.body}</p>
        <p>person being reviewed</p>
      </div>
    </div>
   )
  }
}

export default ReviewShow;