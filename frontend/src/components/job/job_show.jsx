import React from 'react'
import Navbar from '../navbar/navbar_container'
import './job_show.css'
import { Link } from 'react-router-dom';


class JobShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: this.props.jobId,
      jobTaker: '',
      isAvailable: true,
      isClosed: false
    }

    this.takeJob = this.takeJob.bind(this);
    this.leaveJob = this.leaveJob.bind(this);
    this.closeJob = this.closeJob.bind(this);
    this.closeReview = this.closeReview.bind(this);
    
    // this.editJobButton= this.editJobButton.bind(this)

}

  componentDidMount() {
    // const oldJobId = localStorage.getItem('jobId')

    // if (oldJobId) {
    // this.props.fetchJob(this.props.oldJobId)
    // } else {
    this.props.fetchJob(this.props.jobId)

    // }
  }



  takeJob(e) {
    e.preventDefault();

    const takenJob = {
      _id: this.props.jobId,
      jobTaker: this.props.currentUserId,
      isAvailable: false      
    }

    this.props.updateJob(takenJob)

  }

  leaveJob(e) {
    e.preventDefault();

    const takenJob = {
      _id: this.props.jobId,
      jobTaker: '',
      isAvailable: true   
    }
    
    this.props.updateJob(takenJob)
  }

  closeJob(e) {
    e.preventDefault();

    const takenJob = {
      _id: this.props.jobId,
      isClosed: true      
    }
    this.props.updateJob(takenJob)
  }

  closeReview(e) {
    e.preventDefault();

    const takenJob = {
      _id: this.props.jobId,
      isReviewed: true      
    }
    
    

    this.props.updateJob(takenJob)
  }

    editJobButton() {
      const job = this.props.job

    
    if ((job.jobPoster === this.props.currentUserId) && (!job.isClosed) && (job.isAvailable)) {
      return (
        <button className="edit-job-button">Edit Job</button>
        )
      }
    }
    
  takeJobButton() {
    const job = this.props.job


      if ((job.jobPoster !== this.props.currentUserId) && (job.isAvailable)) {
        return (
          <button className="take-job-button" onClick={this.takeJob}>Take Job</button>
          )
        }
  }
      
  leaveJobButton() {
    const job = this.props.job

    if ((job.jobTaker === this.props.currentUserId) && (!job.isClosed)) {
      return (
        <button className="leave-job-button" onClick={this.leaveJob}>Leave Job</button>
      )
    }
  }

  closeJobButton() {
    const job = this.props.job
    
    if ((job.jobPoster === this.props.currentUserId) && (!job.isAvailable) &&(!job.isClosed)) {
      return (
        <button className="close-job-button" onClick={this.closeJob}>Close Job</button>
        )
      }

  }

  reviewJobButtons() {
    const job = this.props.job

    if ((job.jobPoster === this.props.currentUserId) && (job.isClosed) && (!job.isReviewed))

    return (
      <div className="review-job-buttons">
        <div className="review-buttons-title">Would you like to review this transaction?</div>
        <div className="review-job-buttons-inner-wrap">
        <Link to={"/review"} job={job}><button className="close-job-button">YES</button></Link>
        <button className="close-job-button" onClick={ this.closeReview }>NO</button>
        </div>
      </div>
    )
  }

  render() {
    // const job = this.props.jobs[this.props.jobId]
    const job = this.props.job

    // const available = job.isAvailable
    // if (!job) {return null}
    if (!job) return null

    
    return (
      <div className="job-show-outer">
        <Navbar />
        <div className="job-show-wrapper">
          <div className="job-show-header">
            <div className="job-show-poster">{job.jobType}</div>
            <div className="job-show-box">{job.description}</div>
            <div className="job-show-box">{job.jobDifficulty}</div>
            <div>{job.jobStartDate}</div>
            <div>{job.jobEndDate}</div>
            <div>{job.pickup}</div>
            <div>{job.destination}</div>
          <div className="take-job-button-wrap">{ this.takeJobButton() }</div>
          <div className="leave-job-button-wrap">{ this.leaveJobButton()}</div>
          <div className="edit-job-button-wrap">{ this.editJobButton() }</div>
          <div className="close-job-button-wrap">{ this.closeJobButton() }</div>
          <div className="review-job-buttons-wrap">{ this.reviewJobButtons()}</div>

          <div className="job-show-footer">
            <div className="job-show-map">
              <h2>Ill be a map</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default JobShow;