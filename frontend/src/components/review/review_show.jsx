import React, { Component } from 'react'
import Navbar from '../navbar/navbar_container';
import './review_show.css'

class ReviewShow extends Component {

  componentDidMount() {
    this.props.fetchReview(this.props.reviewId)
    this.props.fetchUsers()
  }

  render() {
    console.log(this.props.review)
    if(!this.props.review) return 'loading'

   return (
    <div className='review-show-wrapper'>
      <Navbar/>
      <div className='review-show-container'>
        <div>
          <label>Author: </label>
          <p></p>
        </div>
        <p>Author</p>
        <p>Title</p>
        <p>rating</p>
        <p>rating</p>
        <p>jobPoster name</p>
      </div>
    </div>
   )
  }
}

export default ReviewShow;