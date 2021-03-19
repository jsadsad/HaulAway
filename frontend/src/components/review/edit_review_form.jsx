import React, { Component } from 'react'

class ReviewEditForm extends Component {
  componentWillUnmount() {
    this.props.clearErrors()
  }

  componentDidMount() {
    this.props.fetchReview(this.props.match.params.reviewId)
  }

  render() {
    return <div>Edit Form</div>
    // if (Object.keys(this.state).length === 0) {
    //   return null
    // }
    // let formattedDate = new Date(this.props.review.date)
    // let editButton
    // if (this.props.currentUserId === this.state.author._id) {
    //   editButton = (
    //     <div className="review-show-edit-button-container">
    //       <button>Edit My Review</button>
    //     </div>
    //   )
    // }
    // return (
    //   <div className="review-show-wrapper">
    //     <Navbar />
    //     <div className="review-show-wrap">
    //       <div className="review-show-container">
    //         <div className="review-author-info">
    //           <div
    //             className="review-author-image-container"
    //             onClick={() =>
    //               this.props.history.push(`/users/${this.state.author._id}`)
    //             }
    //           >
    //             <img
    //               className="review-author-image"
    //               src={this.state.author.profilePic}
    //               alt={this.state.author.firstName}
    //             />
    //           </div>
    //           <div className="review-author-container">
    //             <div className="review-author-names-wrap">
    //               <div>Author: </div>
    //               <div
    //                 className="review-author-names-container"
    //                 onClick={() =>
    //                   this.props.history.push(`/users/${this.state.author._id}`)
    //                 }
    //               >
    //                 <div className="review-show-author-firstname">
    //                   {this.state.author.firstName}
    //                 </div>
    //                 <div className="review-show-author-lastname">
    //                   {this.state.author.lastName}
    //                 </div>
    //               </div>
    //             </div>
    //             <div>{this.props.review.title}</div>
    //           </div>
    //         </div>
    //         <div className="review-show-info-conatiner">
    //           <div className="review-show-star-info">
    //             <div className="review-show-star">
    //               {this.getRatingStars(this.props.review.rating)}
    //             </div>
    //             <div>{formattedDate.toLocaleDateString()}</div>
    //           </div>
    //           <div className="review-show-body-info">
    //             {this.props.review.body}
    //           </div>
    //         </div>
    //         <div>{editButton}</div>
    //         <div
    //           className="review-show-reviewedUser-container"
    //           onClick={() =>
    //             this.props.history.push(`/users/${this.state.reviewedUser._id}`)
    //           }
    //         >
    //           <i className="fas fa-arrow-left"></i>
    //           <div className="review-show-reviewedUser">
    //             Click to see {this.state.reviewedUser.firstName}'s other reviews
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // )
  }
}

export default ReviewEditForm
