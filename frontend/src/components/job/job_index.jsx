import React from 'react'
import Navbar from '../navbar/navbar_container'
import Loader from '../Loader/loader'
import { withRouter } from 'react-router'
import './job_index.css'

class JobIndex extends React.Component {
  componentDidMount() {
    this.props.fetchJobs()
  }

  render() {
    const { jobs } = this.props

    if (!jobs) return <Loader />

    return (
      <div className="job-index-wrapper">
        <Navbar />
        <div className="job-index-header">
          <h1>Available Jobs</h1>
        </div>
        <div className="job-index-item-wrapper">
          {jobs.map((job) => {
            if (job.jobType === 'request') {
              return (
                <div
                  key={job._id}
                  className="job-index-item"
                  onClick={() => {
                    this.props.history.push(`/jobs/${job._id}`)
                  }}
                >
                  <div className="job-it-image-wrapper">
                    <img
                      className="user-image"
                      src={job.pictures[0]}
                      alt={job.title}
                    />
                  </div>
                  <div className="job-it-text-wrapper">
                    <h3>Destination: {job.destination}</h3>
                    <h3>Pick-up location: {job.pickup}</h3>
                    <h3>Difficulty: {job.jobDifficulty}</h3>
                    <h3>Start date: {job.jobStartDate}</h3>
                    <h3>End date: {job.jobEndDate}</h3>
                  </div>
                </div>
              )
            }
          })}
        </div>
      </div>
    )
  }
}

export default withRouter(JobIndex)
