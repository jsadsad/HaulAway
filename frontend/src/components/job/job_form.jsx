import React from 'react'
import Navbar from '../navbar/navbar'
import './job_form.css'

class JobPostForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      description: '',
      pickup: '',
      destinataion: '',
      jobDifficulty: '',
      // pictures: '',
      jobType: 'request',
      jobStartDate: '',
      jobEndDate: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.errorsOccured = this.errorsOccured.bind(this)
  }
  
  componentWilUnmount() {
    this.props.clearErrors()
  }

  handleField(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value })
  }

  errorsOccured() {
    return this.props.errors.length !== 0
  }

  handleSubmit(e) {
    e.preventDefault()
    const job = Object.assign({}, this.state)
    this.props.processJobForm(job)
    .then(job => this.props.history.push(`/job`))
  }

  render() {
    return (
      <div className="job-post-outer">
        <Navbar />

        <div className="job-post-container">
          <div className="job-post-form">
            <form onSubmit={this.handleSubmit} className="job-post-form-box">
              <h2 className="job-post-text">Job Request</h2>
              <div className="job-post-input-box">
                <textarea
                  //   type="text"
                  className="job-post-input-desc"
                  placeholder="Description"
                  value={this.state.description}
                    onChange={this.handleField('description')}
                />
                {this.props.errors.description}
              </div>
              <br />
              <div className="job-post-input-box">
                {/* <input
                  type="text"
                  className="job-post-input-count"
                  placeholder="Count"
                  // value={this.state.}
                /> */}
                <input type="file" className="job-post-upload-btn" />
              </div>
              <br />

              <div className="job-post-lvl-btn">
                <label>Choose difficulty</label>
                <select onChange={this.handleField('jobDifficulty')} value={this.state.jobDifficulty}>
                  <option  value="easy">Easy</option>
                  <option  value="medium">Medium</option>
                  <option  value="hard">Hard</option>
                </select>

              </div>
              <br />

              <div className="job-post-input-box">
                <input onChange={this.handleField('pickup')}
                  type="text"
                  className="job-post-input-start"
                  placeholder="pickup"
                  value={this.state.pickup}
                  />
                  {this.props.errors.pickup}
              </div>
              <br />

              <div className="job-post-input-box">
                <input onChange={this.handleField('destination')}
                  type="text"
                  className="job-post-input-dest"
                  placeholder="destination"
                  value={this.state.destination}
                />
                {this.props.errors.destination}
              </div>
              <br />

              <div className="job-post-input-box">
                <input onChange={this.handleField('jobStartDate')}
                  type="date"
                  className="job-post-input-date"
                  placeholder="start date"
                  value={this.state.jobStartDate}
                />
                {this.props.errors.jobStartDate}
              </div>
              <br />
              <div className="job-post-input-box">
                <input onChange={this.handleField('jobEndDate')}
                  type="date"
                  className="job-post-input-date2"
                  placeholder="end date"
                  value={this.state.jobEndDate}
                />
                {this.props.errors.jobEndDate}
              </div>
              <br />

              <button>Submit</button>
            </form>
          </div>
        </div>
        <div className="splash-footer">
          <div className="splash-footer-wrapper">
            {/* <div className="thank you-wrap"> */}
            <div className="thank-you">Thank you for your visit</div>
            {/* </div> */}
            <div className="splash-footer-info">
              <div className="engineerd-by">Engineerd with love by:</div>
              <div className="info-us">
                <a
                  className="contact"
                  href="https://github.com/shinara03"
                  target="_blank"
                >
                  Lena
                </a>
                <a
                  className="contact"
                  href="https://github.com/andmitriy93"
                  target="_blank"
                >
                  Dmitrii
                </a>
                <a
                  className="contact"
                  href="https://github.com/jsadsad"
                  target="_blank"
                >
                  Josh
                </a>
                <a
                  className="contact"
                  href="https://github.com/kinda-dev"
                  target="_blank"
                >
                  Fabio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default JobPostForm
