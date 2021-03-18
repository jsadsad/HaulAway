import React, { Component } from 'react'
import Navbar from '../navbar/navbar_container';
import './review_show.css'

class ReviewShow extends Component {

  componentDidMount() {
    this.props.fetchReview(this.props.reviewId)
  }

  render() {
   return (
    <div className='review-show-wrapper'>
      <Navbar/>
     this is review show page
    </div>
   )
  }
}

export default ReviewShow;