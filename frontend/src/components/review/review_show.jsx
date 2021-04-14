import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../navbar/navbar_container'
import Loader from '../Loader/loader'
import './review_show.css'

class ReviewShow extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    this.props.fetchReview(this.props.reviewId).then((reviewObject) =>
      this.props.fetchUser(this.props.reviewedUserId).then((userObject) =>
        this.props
          .fetchUser(reviewObject.review.data.author)
          .then((user2Object) =>
            this.setState({
              reviewedUser: userObject.user.data,
              author: user2Object.user.data,
            })
          )
      )
    )
  }

  getRatingStars(rating) {
    switch (rating) {
      case 1:
        return (
          <div>
            <i id="filled-star" className="fas fa-star"></i>
            <i id="unfilled-star" className="far fa-star"></i>
            <i id="unfilled-star" className="far fa-star"></i>
            <i id="unfilled-star" className="far fa-star"></i>
            <i id="unfilled-star" className="far fa-star"></i>
          </div>
        )
      case 2:
        return (
          <div>
            <i id="filled-star" className="fas fa-star"></i>
            <i id="filled-star" className="fas fa-star"></i>
            <i id="unfilled-star" className="far fa-star"></i>
            <i id="unfilled-star" className="far fa-star"></i>
            <i id="unfilled-star" className="far fa-star"></i>
          </div>
        )
      case 3:
        return (
          <div>
            <i id="filled-star" className="fas fa-star"></i>
            <i id="filled-star" className="fas fa-star"></i>
            <i id="filled-star" className="fas fa-star"></i>
            <i id="unfilled-star" className="far fa-star"></i>
            <i id="unfilled-star" className="far fa-star"></i>
          </div>
        )
      case 4:
        return (
          <div>
            <i id="filled-star" className="fas fa-star"></i>
            <i id="filled-star" className="fas fa-star"></i>
            <i id="filled-star" className="fas fa-star"></i>
            <i id="filled-star" className="fas fa-star"></i>
            <i id="unfilled-star" className="far fa-star"></i>
          </div>
        )
      case 5:
        return (
          <div>
            <i id="filled-star" className="fas fa-star"></i>
            <i id="filled-star" className="fas fa-star"></i>
            <i id="filled-star" className="fas fa-star"></i>
            <i id="filled-star" className="fas fa-star"></i>
            <i id="filled-star" className="fas fa-star"></i>
          </div>
        )
      default:
        return (
          <div>
            <i id="filled-star" className="fas fa-star"></i>
            <i id="filled-star" className="fas fa-star"></i>
            <i id="filled-star" className="fas fa-star"></i>
            <i id="filled-star" className="fas fa-star"></i>
            <i id="filled-star" className="fas fa-star"></i>
          </div>
        )
    }
  }

  render() {
    if (Object.keys(this.state).length === 0) {
      return null
    }

    let formattedDate = new Date(this.props.review.date)
    let editButton
    let deleteButton
    if (this.props.currentUserId === this.state.author._id) {
      editButton = (
        <div className="review-show-edit-button-container">
          <Link
            to={`/users/${this.state.author._id}/reviews/edit/${this.props.review._id}`}
          >
            <button>Edit Review</button>
          </Link>
        </div>
      )
      deleteButton = (
        <div className="review-show-delete-button-container"
          onClick = {() => {this.props.destroyReview(this.props.reviewId)
                    .then(() => this.props.history.goBack())}}>
          <button>Delete Review</button>
        </div>
      )
    }

    return (
      <div className="review-show-wrapper">
        <Navbar />
        <div className="review-show-wrap">
          <div className="review-show-container">
            <div className="review-author-info">
              <div
                className="review-author-image-container"
                onClick={() =>
                  this.props.history.push(`/users/${this.state.author._id}`)
                }
              >
                <img
                  className="review-author-image"
                  src={this.state.author.profilePic}
                  alt={this.state.author.firstName}
                />
              </div>
              <div className="review-author-container">
                <div className="review-author-names-wrap">
                  <div>Author: </div>
                  <div
                    className="review-author-names-container"
                    onClick={() =>
                      this.props.history.push(`/users/${this.state.author._id}`)
                    }
                  >
                    <div className="review-show-author-firstname">
                      {this.state.author.firstName}
                    </div>
                    <div className="review-show-author-lastname">
                      {this.state.author.lastName}
                    </div>
                  </div>
                </div>
                <div>{this.props.review.title}</div>
              </div>
            </div>
            <div className="review-show-info-conatiner">
              <div className="review-show-star-info">
                <div className="review-show-star">
                  {this.getRatingStars(this.props.review.rating)}
                </div>
                <div>{formattedDate.toLocaleDateString()}</div>
              </div>
              <div className="review-show-body-info">
                {this.props.review.body}
              </div>
            </div>
            <div className='review-show-buttons'>
              <div>{editButton}</div>
              <div>{deleteButton}</div>
            </div> 
            <div
              className="review-show-reviewedUser-container"
              onClick={() =>
                this.props.history.push(`/users/${this.state.reviewedUser._id}`)
              }
            >
              <i className="fas fa-arrow-left"></i>
              <div className="review-show-reviewedUser">
                Click to see {this.state.reviewedUser.firstName}'s other reviews
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewShow
