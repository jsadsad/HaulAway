import React from 'react'
import Navbar from '../navbar/navbar'
import { uploadPhotos } from '../../util/photo_api_util'
import './job_form.css'
import Autocomplete from 'react-google-autocomplete'

class JobPostForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      description: '',
      pickup: '',
      destination: '',
      jobDifficulty: '',
      jobType: 'request',
      jobStartDate: '',
      jobEndDate: '',
      pictures: [],
      selectedFile: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePhotoFile = this.handlePhotoFile.bind(this)
    this.onPickupSelected = this.onPickupSelected.bind(this)
    this.onDestinationSelected = this.onDestinationSelected.bind(this)
  }

  componentWilUnmount() {
    this.props.clearErrors()
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.state.selectedFile) {
      const newData = new FormData()
      for (let i = 0; i < this.state.selectedFile.length; i++) {
        newData.append('file', this.state.selectedFile[i])
      }
      uploadPhotos(newData).then((res) => {
        let data = Object.values(res.data.Data)
        let location = []
        for (let i = 0; i < data.length; i++) {
          location = location.concat(data[i].Location)
        }
        let job = {
          description: this.state.description,
          pickup: this.state.pickup,
          destination: this.state.destination,
          jobDifficulty: this.state.jobDifficulty,
          jobType: this.state.jobType,
          jobStartDate: this.state.jobStartDate,
          jobEndDate: this.state.jobEndDate,
          pictures: location,
        }
        this.props.processJobForm(job)
      })
    } else {
      let job = {
        description: this.state.description,
        pickup: this.state.pickup,
        destination: this.state.destination,
        jobDifficulty: this.state.jobDifficulty,
        jobType: this.state.jobType,
        jobStartDate: this.state.jobStartDate,
        jobEndDate: this.state.jobEndDate,
        pictures: this.state.pictures,
      }
      this.props
        .processJobForm(job)
        .then((job) => this.props.history.push(`/job`))
    }
  }

  handlePhotoFile(e) {
    e.preventDefault()
    this.setState({
      selectedFile: e.target.files,
    })
  }

  handleField(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value })
  }

  onPickupSelected(place) {
    const address = place.formatted_address

    this.setState({
      pickup: address ? address : '',
    })
  }

  onDestinationSelected(place) {
    const address = place.formatted_address
    this.setState({
      destination: address ? address : '',
    })
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
                <input
                  type="file"
                  className="job-post-upload-btn"
                  multiple
                  onChange={this.handlePhotoFile}
                />
              </div>
              <br />
              <div className="job-post-lvl-btn">
                <label>Choose difficulty</label>
                <select
                  onChange={this.handleField('jobDifficulty')}
                  value={this.state.jobDifficulty}
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
              <br />
              {/* <div className="job-post-input-box">
                <input
                  style={{ color: 'black' }}
                  onChange={this.handleField('pickup')}
                  type="text"
                  className="job-post-input-start"
                  placeholder="pickup"
                  value={this.state.pickup}
                />
                {this.props.errors.pickup}
              </div> */}
              <Autocomplete
                onPlaceSelected={this.onPickupSelected}
                style={{ width: '25%' }}
                types={['address']}
                componentRestrictions={{ country: 'us' }}
                placeholder="Pickup"
              />
              <br />
              {/* <div className="job-post-input-box">
                <input
                  style={{ color: 'black' }}
                  onChange={this.handleField('destination')}
                  type="text"
                  className="job-post-input-dest"
                  placeholder="destination"
                  value={this.state.destination}
                />
                {this.props.errors.destination}
              </div> */}
              <Autocomplete
                onPlaceSelected={this.onDestinationSelected}
                style={{ width: '25%' }}
                types={['address']}
                componentRestrictions={{ country: 'us' }}
                onChange={this.handleField('destination')}
                placeholder="Destination"
              />
              <br />
              <div className="job-post-input-box">
                <input
                  onChange={this.handleField('jobStartDate')}
                  type="date"
                  className="job-post-input-date"
                  placeholder="start date"
                  value={this.state.jobStartDate}
                />
                {this.props.errors.jobStartDate}
              </div>
              <br />
              <div className="job-post-input-box">
                <input
                  onChange={this.handleField('jobEndDate')}
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
