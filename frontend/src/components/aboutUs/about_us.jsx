import React from 'react'
import Navbar from '../navbar/navbar_container'
import './about_us.css'

class AboutUs extends React.Component {
  render() {
    return (
      <div className="about-us-outter">
        <Navbar />
        <div className="about-us-wrapper">
          <div className="about-us-person">
            <div className="about-us-person-img">
              <img
                className="about-us-avatar"
                src="https://angel.co/cdn-cgi/image/width=200,height=200,format=auto,fit=cover/https://photos.angel.co/users/12782061-original?1615481046"
                alt="Lena"
              />
            </div>
            <div className="about-us-person-desc">
              <h3 className="about-us-names">HyeYoung (Lena) Shin</h3>
              <div className="team-pos">Backend</div>
              <br />
              <div className="info-about-us">
                <div className="info-about-us-contacts">
                  <a
                    className="contact"
                    href="https://github.com/shinara03"
                    target="_blank"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                  <a
                    className="contact"
                    href="https://www.linkedin.com/in/hyeyoung-shin-442228209/"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    className="contact"
                    href="https://angel.co/u/hyeyoung-lena-shin"
                    target="_blank"
                  >
                    <i className="fa fa-angellist"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="about-us-person">
            <div className="about-us-person-img">
              <img
                className="about-us-avatar"
                src="https://angel.co/cdn-cgi/image/width=200,height=200,format=auto,fit=cover/https://photos.angel.co/users/12764367-original?1615433196"
                alt=""
              />
            </div>
            <div className="about-us-person-desc">
              <h2 className="about-us-names">Joshua Clarence Sadsad</h2>
              <div className="team-pos">Lead</div>
              <br />
              <div className="info-us">
                <div className="info-us-contacts">
                  <a
                    className="contact"
                    href="https://github.com/jsadsad"
                    target="_blank"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                  <a
                    className="contact"
                    href="https://www.linkedin.com/in/joshsad2/"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    className="contact"
                    href="https://angel.co/u/jsadsad"
                    target="_blank"
                  >
                    <i className="fa fa-angellist"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="about-us-person">
            <div className="about-us-person-img">
              <img
                className="about-us-avatar"
                src="https://angel.co/cdn-cgi/image/width=200,height=200,format=auto,fit=cover/https://photos.angel.co/users/12764292-original?1615444592"
                alt=""
              />
            </div>
            <div className="about-us-person-desc">
              <h2 className="about-us-names">Fabio Raffaele Bortone</h2>
              <div className="team-pos">Frontend</div>
              <br />
              <div className="info-us">
                <div className="info-us-contacts">
                  <a
                    className="contact"
                    href="https://github.com/kinda-dev"
                    target="_blank"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                  <a
                    className="contact"
                    href="https://www.linkedin.com/in/fabio-raffaele-bortone/"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    className="contact"
                    href="https://angel.co/u/fabio-raffaele-bortone"
                    target="_blank"
                  >
                    <i className="fa fa-angellist"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="about-us-person">
            <div className="about-us-person-img">
              <img
                className="about-us-avatar"
                src="https://angel.co/cdn-cgi/image/width=200,height=200,format=auto,fit=cover/https://photos.angel.co/users/12751669-original?1614949616"
                alt=""
              />
            </div>
            <div className="about-us-person-desc">
              <h2 className="about-us-names">Dmitrii An</h2>
              <div className="team-pos">Flex</div>
              <br />
              <div className="info-us">
                <div className="info-us-contacts">
                  <a
                    className="contact"
                    href="https://github.com/andmitriy93"
                    target="_blank"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                  <a
                    className="contact"
                    href="https://www.linkedin.com/in/dmitriy-an/"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    className="contact"
                    href="https://angel.co/u/dmitrii-an"
                    target="_blank"
                  >
                    <i className="fa fa-angellist"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutUs
