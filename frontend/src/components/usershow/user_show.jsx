import React from 'react';
import NavBar from '../navbar/navbar_container';

import './user_show.css';

class UserShow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  componentDidMount() {
    // debugger
    this.props.fetchUser(this.props.userId)
    // this.props.fetchUsers()
    this.props.fetchJobs()
    // this.props.fetchUserJobs(this.props.userId)
    this.props.fetchReviews()
  }

  componentDidUpdate(prevProps,prevState) {
    if (this.props.userId !== prevProps.userId) {
      this.props.fetchUser(this.props.userId)
    }


  }


  getjobIndexItems() {
    return this.props.jobs.map((job, index) => {
      return (
        <div key={index} onClick={() => this.props.history.push(`/jobs/${job._id}`)} 
        className='job-info-index'>
          <p>{index + 1}</p>
          <p>{job.jobStartDate}</p>
          <p>{job.jobEndDate}</p>
          <p>{job.pickup}</p>
          <p>{job.destination}</p>
        </div>
      )
    })
  }

  getReviewIndexItems() {
    let totalReviewNum = 0
    let reviewIndexItems  = this.props.jobs.map((job) => {
      return this.props.reviews.map((review, index) => {
        if (job._id === review.jobId && this.props.user._id !== review.author) {
          totalReviewNum += 1
          let formattedDate = new Date(review.date)
          let deleteButton = null;
          let editButton = null;
          if (this.props.currentUserId === review.author) {
            deleteButton = <div className='review-delete-button'>x</div>
            editButton = <div className='review-delete-button'>Edit</div>
          }
          return (
            <div key={index} className='review-info-index'>
              {/* <p>{index + 1}</p> */}
              {/* <p>{review.rating}</p> */}
              <div>{this.getRatingStars(review.rating)}</div>
              {/* <div>{review.author}</div> */}
              <div>{review.title}</div>
              <div>{review.body}</div>
              <div>{formattedDate.toLocaleDateString()}</div>
              <div>{editButton}</div>
              <div onClick={() => this.props.destroyReview(review._id).then(() => window.location.reload())}>{deleteButton}</div>
            </div>
          )
        }
        else {
          return null
        }
      })
    })
    if (totalReviewNum === 0) {
      return <p className='no-review-message'>Currently, there is no review for this user</p>
    } else {
      return reviewIndexItems
    }
  }

  calculateAverage() {
    let totalRating = 0;
    let totalUserReviews = 0;
    this.props.jobs.forEach(job => {
      this.props.reviews.forEach(review => {
        if(job._id === review.jobId && this.props.user._id !== review.author) {
          totalRating += review.rating
          totalUserReviews += 1
        }
      })
    })

    if (totalUserReviews === 0) {
      return this.getRatingStars(5)
    } else {
      return this.getRatingStars(Math.floor(totalRating/totalUserReviews))
    }
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

    const {user, jobs}= this.props
    if (!user) {return <div>Loading</div>}

    // debugger 
    // console.log(jobs)
    let editButton = ''
    if(this.props.userId === this.props.currentUserId) {
      editButton =  <button onClick={() => this.props.openModal('edit user', user._id )}>Edit</button>
    }

    return(
       <div className='user-show-page'>
        
        <NavBar/>
        
        <div className='show-page-wrapper'>
          
          <div className='user-info-wrapper'>
            <div className='user-image-wrap'>
              <img className="user-image" src={user.profilePic} alt={user.firstName}/>
            </div>
            <div className='user-info-text-wrapper'> 
              <div className='user-name'>
                <div className='user-firstname'>{user.firstName}</div>
                <div className='user-lastname'>{user.lastName}</div>
              </div>
              <div className='user-email'>{user.email}</div>
              <div className='average-rating'>{this.calculateAverage()}</div>
              {/* <div onClick={() => this.props.openModal('edit user', user._id )}>Edit</div> */}
              <div className='name-edit-button'>{editButton}</div>
            </div>
          </div>
          
          <div className='rest-wrapper'>
            <div className='job-info-wrapper'>
                <h2 className='job-header'>Jobs ({this.props.jobs.length})</h2>
                <div className='job-info-header'>
                  <h3>Job Index</h3>
                  <h3>Start Date</h3>
                  <h3>End Date</h3>
                  <h3>Pickup Location</h3>
                  <h3>Destination Location</h3>
                </div>
                <div className='job-info-index-wrapper'>
                 {this.getjobIndexItems()}
                </div>
            </div>
            <div className='review-info-wrapper'>
                <h2 className='review-header'>Reviews</h2>
                <div className='review-info-index-wrapper'>
                  {this.getReviewIndexItems()}
                </div>
            </div>
          </div>
        </div>
      
      </div>
    ) 
  }
}

export default UserShow