import React from 'react'

class JobIndex extends React.Component {
  componentDidMount() {
    this.props.fetchJobs()
  }

  render() {
    return (
    <div className='job-index-wrapper'>
      <div className='job-index-header'>
        <h1>JOBS</h1>
      </div>
    </div>
    )
  }
} 

export default JobIndex