import React from 'react'
import Navbar from '../navbar/navbar'
import './job_post.css'

class JobPostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      pickup: '',
      destinataion: '',
      jobDifficulty: '',
      // pictures: '',
      jobType: '',
      jobStartDate: '',
      jobEndDate: ''
    }
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
                  //   onChange={this.handleField('description')}
                />
              </div>
              <br />
              <div className="job-post-input-box">
                <input
                  type="text"
                  className="job-post-input-count"
                  placeholder="Count"
                />
                <input type="file" className="job-post-upload-btn" />
              </div>
              <br />

              <div className="job-post-lvl-btn">
                <button>Easy</button>
                <button>Medium</button>
                <button>Hard</button>
              </div>
              <br />

              <div className="job-post-input-box">
                <input
                  type="text"
                  className="job-post-input-start"
                  placeholder="start location"
                />
              </div>
              <br />

              <div className="job-post-input-box">
                <input
                  type="text"
                  className="job-post-input-dest"
                  placeholder="destination"
                />
              </div>
              <br />

              <div className="job-post-input-box">
                <input
                  type="date"
                  className="job-post-input-date"
                  placeholder="start date"
                />
              </div>
              <br />
              <div className="job-post-input-box">
                <input
                  type="date"
                  className="job-post-input-date2"
                  placeholder="end date"
                />
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
