import React, { Component } from 'react'
import Navbar from '../navbar/navbar_container';
import './review_show.css'

class ReviewShow extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    this.props.fetchReview(this.props.reviewId).then(reviewObject => 
      this.props.fetchUser(this.props.reviewedUserId)
      .then(userObject => this.props.fetchUser(reviewObject.review.data.author).then(user2Object =>
         this.setState({reviewedUser: userObject.user.data, author: user2Object.user.data})))
    )
    // this.props.fetchUsers()
  }

  getRatingStars(rating) {
    switch(rating) {
    case 1:
      return (
        <div>
          <i id='filled-star' className="fas fa-star"></i>
          <i id='unfilled-star' className="far fa-star"></i>
          <i id='unfilled-star' className="far fa-star"></i>
          <i id='unfilled-star' className="far fa-star"></i>
          <i id='unfilled-star' className="far fa-star"></i>
        </div>
      )
    case 2:
      return (
        <div>
          <i id='filled-star' className="fas fa-star"></i>
          <i id='filled-star' className="fas fa-star"></i>
          <i id='unfilled-star' className="far fa-star"></i>
          <i id='unfilled-star' className="far fa-star"></i>
          <i id='unfilled-star' className="far fa-star"></i>
        </div>
      )
    case 3: 
      return (
        <div>
          <i id='filled-star' className="fas fa-star"></i>
          <i id='filled-star' className="fas fa-star"></i>
          <i id='filled-star' className="fas fa-star"></i>
          <i id='unfilled-star' className="far fa-star"></i>
          <i id='unfilled-star' className="far fa-star"></i>
        </div>
      )
    case 4: 
      return (
        <div>
          <i id='filled-star' className="fas fa-star"></i>
          <i id='filled-star' className="fas fa-star"></i>
          <i id='filled-star' className="fas fa-star"></i>
          <i id='filled-star' className="fas fa-star"></i>
          <i id='unfilled-star' className="far fa-star"></i>
        </div>
      )
    case 5:
      return (
         <div>
          <i id='filled-star' className="fas fa-star"></i>
          <i id='filled-star' className="fas fa-star"></i>
          <i id='filled-star' className="fas fa-star"></i>
          <i id='filled-star' className="fas fa-star"></i>
          <i id='filled-star' className="fas fa-star"></i>
        </div>
      )
    default:
      return (
         <div>
          <i id='filled-star' className="fas fa-star"></i>
          <i id='filled-star' className="fas fa-star"></i>
          <i id='filled-star' className="fas fa-star"></i>
          <i id='filled-star' className="fas fa-star"></i>
          <i id='filled-star' className="fas fa-star"></i>
        </div>
      )
  }
  }

  render() {
  //   const {review, reviewedUser, users} = this.props
  //   if(!review || !users || !reviewedUser) {return 'loading'}

  //   console.log(reviewedUser)
  //   const reviewedUserInfo = reviewedUser[0]
  //   const authorInfo = Object.values(this.props.users).filter(user => user._id === review.author)[0]
  //   console.log(authorInfo)
  //  return (
  //   <div className='review-show-wrapper'>
  //     <Navbar/>
  //     <div className='review-show-container'>
  //       <div className='review-author-info'>
  //         <div className='review-author-image-conatiner'>
  //           <img className='review-author-image' src={authorInfo.profilePic} alt={authorInfo.firstName}/>
  //         </div>
  //         <div className='review-author-names-container'>
  //           <div>{authorInfo.firstName}</div>
  //           <div>{authorInfo.lastName}</div>
  //         </div>
  //       </div>
  //       <div>
          
  //       </div>
  //       <p>Title: {review.title}</p>
  //       <p>Rating: {review.rating}</p>
  //       <p>Body: {review.body}</p>
  //       <p>person being reviewed</p>
  //     </div>
  //   </div>
  //  )

    if(Object.keys(this.state).length === 0) {
      return null;
    } 

    let formattedDate = new Date(this.props.review.date)
    return ( 
    <div className='review-show-wrapper'>
      <Navbar/>
      <div className='review-show-container'>
        <div className='review-author-info'>
           <div className='review-author-image-conatiner'>
             <img className='review-author-image' src={this.state.author.profilePic} alt={this.state.author.firstName}/>
           </div>
           <div className='review-author-names-container'>
             <div>{this.state.author.firstName}</div>
             <div>{this.state.author.lastName}</div>
           </div>
         </div>
         <div>
           <div>{this.getRatingStars(this.props.review.rating)}</div>
           <div>{this.props.review.title}</div>
           <div>{formattedDate.toLocaleDateString()}</div>
           <div>{this.props.review.body}</div>
         </div>
         <div>
           
         </div>
      </div>
    </div> 
    )
  }
}

export default ReviewShow;