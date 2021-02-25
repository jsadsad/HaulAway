import React from 'react'
import Navbar from '../navbar/navbar'

class JobOfferForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // description: '',
      pickup: '',
      destinataion: '',
      // jobDifficulty: '',
      // pictures: '',
      jobType: 'offer',
      jobStartDate: '',
      // jobEndDate: '',
    }
  }

  render() {
    return (
      <div className="job-offer-outer">
        <Navbar />

        <div className="job-offer-container">
          <div className="job-offer-form">
            <form onSubmit={this.handleSubmit} className="job-offer-form-boxx">
              <h2 className="job-offer-text">Job Offer</h2>
              <div className="job-offer-input-box">
                <input
                  type="text"
                  className="job-offer-input-pickup"
                  placeholder="Pickup"
                />
              </div>
              <br />
              <div className="job-offer-input-box">
                <input
                  type="text"
                  className="job-offer-input-dest"
                  placeholder="Destination"
                />
              </div>
              <br />
              <div className="job-offer-input-box">
                <input
                  type="date"
                  className="job-offer-input-start"
                  placeholder="Start date"
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

export default JobOfferForm
