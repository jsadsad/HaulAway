import React from 'react'
import Navbar from '../navbar/navbar_container'
import './job_show.css'
import { Link, withRouter } from 'react-router-dom'

class JobShow extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      _id: this.props.jobId,
      jobTaker: '',
      isAvailable: true,
      isClosed: false,
      isReviewed: false,
    }

    this.takeJob = this.takeJob.bind(this)
    this.leaveJob = this.leaveJob.bind(this)
    this.closeJob = this.closeJob.bind(this)
    this.closeReview = this.closeReview.bind(this)

    // for testing
    this.openJob = this.openJob.bind(this)

    // this.editJobButton= this.editJobButton.bind(this)
  }

  componentDidMount() {
    this.props.fetchJob(this.props.jobId)
  }

  takeJob(e) {
    e.preventDefault()

    const takenJob = {
      _id: this.props.jobId,
      jobTaker: this.props.currentUserId,
      isAvailable: false,
    }

    this.props.updateJob(takenJob)
  }

  leaveJob(e) {
    e.preventDefault()

    const takenJob = {
      _id: this.props.jobId,
      jobTaker: '',
      isAvailable: true,
    }

    this.props.updateJob(takenJob)
  }

  openJob(e) {
    e.preventDefault()

    const takenJob = {
      _id: this.props.jobId,
      isClosed: false,
    }
    this.props.updateJob(takenJob)
  }

  closeReview(e) {
    e.preventDefault()

    const takenJob = {
      _id: this.props.jobId,
      isReviewed: true,
    }

    this.props.updateJob(takenJob)
  }
  
    editJobButton() {
      const job = this.props.job
      
      
      if ((job.jobPoster._id === this.props.currentUserId) && (!job.isClosed) && (job.isAvailable)) {
        return (
          <button onClick={()=> this.props.history.push(`/jobs/edit/${job._id}`)} className="edit-job-button">Edit Job</button>
        )
      }
    }
    
    takeJobButton() {
      const job = this.props.job

      
      if ((job.jobPoster._id !== this.props.currentUserId) && (job.isAvailable)) {
        return (
          <button className="take-job-button" onClick={this.takeJob}>Take Job</button>
          )
        }
      }
      
  leaveJobButton() {
    const job = this.props.job

    if (job.jobTaker === this.props.currentUserId && !job.isClosed) {
      return (
        <button className="leave-job-button" onClick={this.leaveJob}>
          Leave Job
        </button>
      )
    }
  }

  closeJob(e) {
    e.preventDefault()

    const takenJob = {
      _id: this.props.jobId,
      isClosed: true,
    }
    this.props.updateJob(takenJob)
  }

  closeJobButton() {
    const job = this.props.job
    if (!job.jobPoster) return null

    if (
      job.jobPoster._id === this.props.currentUserId &&
      !job.isAvailable &&
      !job.isClosed
    ) {
      return (
        <button className="close-job-button" onClick={this.closeJob}>
          Close Job
        </button>
      )
    }
  }

  reviewJobButtons() {
    const job = this.props.job
    if (!job.jobPoster) return null

    //this is checking if the jobclosed is true and jobreview should be false
    if (
      job.jobPoster._id === this.props.currentUserId &&
      !job.isReviewed &&
      job.isClosed
    )
      return (
        <div className="review-job-buttons">
          <div className="review-buttons-title">
            Would you like to review this transaction?
          </div>
          <div className="review-job-buttons-inner-wrap">
            <button className="test-reopen-job" onClick={this.openJob}></button>
            <Link to={'/review'} job={job}>
              <button className="close-job-button">YES</button>
            </Link>
            <button className="close-job-button" onClick={this.closeReview}>
              NO
            </button>
          </div>
        </div>
      )
  }

  render() {
    const job = this.props.job
    if (!job) return null
    // if (!job.jobPoster) return <h1>Loading</h1>
    let haulRequester = ''
    if (job.jobPoster) {
      haulRequester = (
        <div className="job-poster-name">
          Haul requested by:{' '}
          <Link to={`/users/${job.jobPoster}`}>{job.jobPoster.firstName}</Link>
        </div>
      )
    }

    return (
      <div className="job-show-outer">
        <Navbar />
        <div className="job-show-wrapper">
          <div className="job-show-header">
            {haulRequester}
            {/* <div className="job-show-poster">{job.jobType}</div> */}
            <div className="job-show-box">{job.description}</div>
            <div className="job-show-box">{job.jobDifficulty}</div>
            <div>{job.jobStartDate}</div>
            <div>{job.jobEndDate}</div>
            <div>{job.pickup}</div>
            <div>{job.destination}</div>
            <div className="job-show-pictures-wrap">
            {job.pictures.map((picture, idx) => {
              return (
              <div className="job-show-single-picture-wrap" key={idx}>
                <img className="job-wshow-picture" src={picture} alt="job-picture"/>
              </div>
              )
            })}
            </div>
            <div className="take-job-button-wrap">{this.takeJobButton()}</div>
            <div className="leave-job-button-wrap">{this.leaveJobButton()}</div>
            <div className="edit-job-button-wrap">{this.editJobButton()}</div>
            <div className="close-job-button-wrap">{this.closeJobButton()}</div>
            <div className="review-job-buttons-wrap">
              {this.reviewJobButtons()}
            </div>

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

export default JobShow
