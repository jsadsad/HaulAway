import React from 'react';
import NavBar from '../navbar/navbar_container';

import usershow from './user_show.css';

class UserShow extends React.Component {

  componentDidMount() {
    this.props.fetchUser(this.props.userId)
    this.props.fetchUserJobs(this.props.userId)
  }


  getjobIndexItems() {
    return this.props.jobs.map((job, index) => {
      return (
        <div onClick={() => this.props.history.push(`/job/${job._id}`)} 
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

  render() {

    const user = this.props.users[this.props.userId]
    if (!user) {return null}

    return(
       <div className='user-show-page'>
        
        <NavBar/>
        
        <div className='show-page-wrapper'>
          
          <div className='user-info-wrapper'>
            <div className='user-image-wrap'>
              <img className="user-image" src={user.profilePic} alt={user.firstName}/>
            </div>
            <div className='user-name'>
              <p className='user-firstname'>{user.firstName}</p>
              <p className='user-lastname'>{user.lastName}</p>
            </div>
            {/* <p>ratings</p> */}
            <p>{user.email}</p>
          </div>
          
          <div className='rest-wrapper'>
            <div className='job-info-wrapper'>
                <h2>Jobs</h2>
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
                <h2>Review</h2>
            </div>
          </div>
        </div>
      
      </div>
    )
  }
}

export default UserShow