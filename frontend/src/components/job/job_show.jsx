import React from 'react'
import Navbar from '../navbar/navbar_container'
import './job_show.css'
import { Link, withRouter } from 'react-router-dom'

class JobShow extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      // _id: this.props.jobId,
      jobTaker: '',
      isAvailable: true,
      isClosed: false,
      isReviewed: false,
      // job: this.props.job
      isChanged: true
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
    // debugger
    this.props.fetchJob(this.props.jobId)
  }

  componentDidUpdate(prevProps,prevState) {
    if (this.props.job !== prevProps.job) {
      this.props.fetchJob(this.props.jobId)
    }

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
      jobPoster: this.props.job.jobPoster
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

      // debugger
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
      jobPoster: this.props.job.jobPoster

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
        <button className="close-job-button" onClick={this.closeJob} job={this.props.job}>
          Close Job
        </button>
      )
    }
  }

  reviewJobButtons() {
    const job = this.props.job
    // if (!job.jobPoster) return null

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
            <Link to={`/jobs/${job._id}/review`} job={job}>
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

    return (
      <div className="job-show-outer">

        <Navbar />

        <div className="job-show-body-wrapper">
          <div className="job-show-body-inner-wrapper">

            <div className="job-show-info-left-side">

              <div className="job-show-info-wrapper">
                <div className="job-show-poster color-one">
                  Haul requested by:{' '}
                  <Link to={`/users/${job.jobPoster._id}`} className="job-poster-link color-two">{job.jobPoster.firstName}</Link>
                </div>
                {/* {haulRequester} */}
                <div className="job-show-description-title color-one">Job Description:</div>
                <div className="job-show-description color-two">{job.description}</div>
                <div className="job-show-difficulty-title color-one">Difficulty:&nbsp;&nbsp;
                  <div className="job-show-difficulty color-two">{job.jobDifficulty}</div>
                </div>
                <div className="job-show-start-end-title color-one">This job will be available:</div>
                  <div className="job-show-start-end-inner-wrap">
                    <div className="job-show-start-title color-one">from&nbsp;</div>
                    <div className="job-show-start-date color-two">&nbsp;{job.jobStartDate}&nbsp;</div>
                    <div className="job-show-end-title color-one">&nbsp;to&nbsp;</div>
                    <div className="job-show-end-date color-two">&nbsp;{job.jobEndDate}</div>
                  </div>
                <div className="job-show-pickup-title color-one">Pickup at:
                  <div className="job-show-pickup color-two">{job.pickup}</div>
                </div>
                <div className="job-show-delivery-title color-one">Delivery at:
                  <div className="job-show-destination color-two">{job.destination}</div>
                </div>
              </div>

              <div className="job-show-buttons-wrapper">
                <div className="take-job-button-wrap">{this.takeJobButton()}</div>
                <div className="leave-job-button-wrap">{this.leaveJobButton()}</div>
                <div className="edit-job-button-wrap">{this.editJobButton()}</div>
                <div className="close-job-button-wrap">{this.closeJobButton()}</div>
                <div className="review-job-buttons-wrap">{this.reviewJobButtons()}</div>
              </div>

            </div>

            <div className="job-show-info-right-side">

              <div className="job-show-map">
                <div>Ill be a map</div>
              </div>
              <div className="job-show-pictures-title color-one">Items to Haul:</div> 
              <div className="job-show-pictures-wrap">
                {job.pictures.map((picture, idx) => {
                  return (
                    <div className="job-show-single-picture-wrap" key={idx}>
                      <img className="job-show-picture" src={picture} alt="job-picture"/>
                    </div>
                  )
                })}
              </div>

            </div>


              
          </div>
        </div>

        <div className="job-show-footer"></div>

      </div>
    )
  }
}

export default JobShow
