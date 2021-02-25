import React from 'react'
import Navbar from '../navbar/navbar_container'
import './job_index.css'

class JobIndex extends React.Component {
  componentDidMount() {
    this.props.fetchJobs()
  }

  render() {
    if (!this.props.jobs) {return null}
    console.log(this.props.jobs)

    //description, destination, jobDifficulty, jobEndDate, jobPoster, jobType, pickup
    return (
    <div className='job-index-wrapper'>
      <Navbar />
      <div className='job-index-header'>
        <h1>JOBS</h1>
      </div>
      <div className='job-index-item-wrapper'>
        {this.props.jobs.map(job => {
          if (job.jobType === "request") {
            return (
              <div key={job._id} className='job-index-item'>
                <div className='job-it-image-wrapper'>
                  <h3>Job image</h3>
                </div>
                <div className='job-it-text-wrapper'>
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

export default JobIndex