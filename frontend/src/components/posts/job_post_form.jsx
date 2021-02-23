import React from 'react'

class JobPostForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="job-post-outer">
        <div className="job-post-container">
          <div className="job-post-form">
            <form onSubmit={this.handleSubmit} className="job-post-form-box">
              <div className="job-post-input-box">
                <input
                  type="text"
                  className="job-post-input-desc"
                  placeholder="Description"
                  onChange={this.handleField('description')}
                />
              </div>
              <br/>
              <div className="job-post-input-box">
                <input
                  type="text"
                  className="job-post-input-count"
                  placeholder="Count"
                />
                <button>...</button> {/* button to upload img */}
              </div>
              <br/>

              <div className="job-post-lvl-btn">
                <button>Easy</button>
                <button>Medium</button>
                <button>Hard</button>
              </div>
              <br/>

              <div className="job-post-input-start">

              </div>
              
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default JobPostForm
