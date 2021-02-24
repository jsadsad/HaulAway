import React from 'react'

class JobShow extends React.Component {

  componentDidMount() {
    this.props.fetchJob(this.props.jobId)
  }

  render() {
    const job = this.props.jobs[this.props.jobId]
    if (!job) {return null}
    
    return (
      <div className="job-show-outer">
        <div className="job-show-wrapper">
          <div className="job-show-header">
            <div className="job-show-poster">
              {/* <h2>Job Poster</h2> */}
              {job.jobType} {/* For now as a poster render jobType */}
            </div>

            <div className="job-show-box">
              <input
                type="text"
                className="job-show-input-desc"
                placeholder="Description"
                value={job.description}
              />
            </div>

            <div className="job-show-box">
              <input
                type="text"
                className="job-show-input-diff"
                placeholder="Difficulty"
                value={job.jobDifficulty}
              />
            </div>
          </div>
          <div className="job-show-body">
            <div className="job-show-box">
              <input
                type="date"
                className="job-show-input-start"
                placeholder="Start Date"
                value={job.jobStartDate}
              />
            </div>
            <div className="job-show-box">
              <input
                type="date"
                className="job-show-input-end"
                placeholder="End Date"
                value={job.jobEndDate}
              />
            </div>
            <div className="job-show-box">
              <input
                type="text"
                className="job-show-input-pickup"
                placeholder="Pickup"
                value={job.pickup}
              />
            </div>
            <div className="job-show-box">
              <input
                type="text"
                className="job-show-input-dest"
                placeholder="Destination"
                value={job.destinataion}
              />
            </div>
          </div>
          <div className="job-show-footer">
            <div className="job-show-map">
              <h2>Ill be a map</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default JobShow;