import React from 'react'

class JobShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: this.props.jobId,
      jobTaker: '',
      isAvailable: true
    }

    this.takeJob = this.takeJob.bind(this);
    this.leaveJob = this.leaveJob.bind(this);

    
    // this.editJobButton= this.editJobButton.bind(this)

}

  componentDidMount() {
    this.props.fetchJob(this.props.jobId)
  }

  takeJob(e) {
    e.preventDefault();
    // this.props.job = {
    //   jobTaker: this.props.jobtaker
    // }

    const takenJob = {
      _id: this.props.jobId,
      jobTaker: this.props.currentUserId,
      isAvailable: false      
    }
    
    

    this.props.updateJob(takenJob)
    .then(this.props.history.push('/homepage'))

  }

  leaveJob(e) {
    e.preventDefault();
    // this.props.job = {
    //   jobTaker: this.props.jobtaker
    // }

    const takenJob = {
      _id: this.props.jobId,
      jobTaker: '',
      isAvailable: true      
    }
    
    

    this.props.updateJob(takenJob)
    .then(this.props.history.push('/homepage'))

  }

  editJobButton() {
    const job = this.props.jobs[this.props.jobId]
    
    if (job.jobPoster === this.props.currentUserId) {
      console.log(this.props.jobs.jobPoster === this.props.currentUserId)
      return (
        <button className="edit-job-button">Edit Job</button>
        )
      }
    }
    
    takeJobButton() {
      const job = this.props.jobs[this.props.jobId]
      // debugger
      if ((job.jobPoster !== this.props.currentUserId) && (job.isAvailable)) {
        return (
          <button className="take-job-button" onClick={this.takeJob}>Take Job</button>
          )
        }
      }
      
      leaveJobButton() {
        const job = this.props.jobs[this.props.jobId]
    // debugger
    if (job.jobTaker === this.props.currentUserId) {
      return (
        <button className="leave-job-button" onClick={this.leaveJob}>Leave Job</button>
      )
    }
  }

  render() {
    const job = this.props.jobs[this.props.jobId]
    if (!job) {return null}
    
    return (
      <div className="job-show-outer">
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