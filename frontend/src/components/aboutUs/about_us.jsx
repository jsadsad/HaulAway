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
              <img className="about-us-avatar" src="https://angel.co/cdn-cgi/image/width=200,height=200,format=auto,fit=cover/https://photos.angel.co/users/12782061-original?1615481046" alt="Lena"/>
            </div>
            <div className="about-us-person-desc">
              <h2 className="about-us-names">HyeYoung (Lena) Shin</h2>
              <p className="about-us-p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, hic quo quaerat ab officia iure, iste accusantium, voluptate recusandae quae beatae incidunt natus maiores soluta sit iusto porro! Aliquid, maxime?</p>
              <div className="info-about-us">
                <div className="info-about-us-contacts">
                  <a className="contact" href="https://github.com/shinara03" target="_blank"><i className='fa fa-github'></i></a>
                  <a className="contact" href="https://www.linkedin.com/in/hyeyoung-shin-442228209/" target="_blank"><i className='fa fa-linkedin'></i></a>
                  <a className="contact" href="https://angel.co/u/hyeyoung-lena-shin" target="_blank"><i className='fa fa-angellist'></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="about-us-person">
            <div className="about-us-person-img">
              <img className="about-us-avatar" src="https://angel.co/cdn-cgi/image/width=200,height=200,format=auto,fit=cover/https://photos.angel.co/users/12764367-original?1615433196" alt=""/>
            </div>
            <div className="about-us-person-desc">
              <h2 className="about-us-names">Joshua Clarence Sadsad</h2>
              <p className="about-us-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero similique voluptas excepturi eius. Quisquam aliquid fuga iusto porro explicabo alias harum, veniam provident! Placeat eius eos voluptatum, necessitatibus quisquam dolorum.</p>
              <div className="info-us">
                <div className="info-us-contacts">
                  <a className="contact" href="https://github.com/jsadsad" target="_blank"><i className='fa fa-github'></i></a>
                  <a className="contact" href="https://www.linkedin.com/in/joshsad2/" target="_blank"><i className='fa fa-linkedin'></i></a>
                  <a className="contact" href="https://angel.co/u/jsadsad" target="_blank"><i className='fa fa-angellist'></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="about-us-person">
            <div className="about-us-person-img">
              <img className="about-us-avatar" src="https://angel.co/cdn-cgi/image/width=200,height=200,format=auto,fit=cover/https://photos.angel.co/users/12764292-original?1615444592" alt=""/>
            </div>
            <div className="about-us-person-desc">
              <h2 className="about-us-names">Fabio Raffaele Bortone</h2>
              <p className="about-us-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptate reiciendis alias tempore optio ducimus amet ut voluptatibus temporibus? Impedit soluta facere iusto repellendus excepturi enim quam officia omnis minus!</p>
              <div className="info-us">
                <div className="info-us-contacts">
                  <a className="contact" href="https://github.com/kinda-dev" target="_blank"><i className='fa fa-github'></i></a>
                  <a className="contact" href="https://www.linkedin.com/in/fabio-raffaele-bortone/" target="_blank"><i className='fa fa-linkedin'></i></a>
                  <a className="contact" href="https://angel.co/u/fabio-raffaele-bortone" target="_blank"><i className='fa fa-angellist'></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="about-us-person">
            <div className="about-us-person-img">
              <img className="about-us-avatar" src="https://angel.co/cdn-cgi/image/width=200,height=200,format=auto,fit=cover/https://photos.angel.co/users/12751669-original?1614949616" alt=""/>
            </div>
            <div className="about-us-person-desc">
              <h2 className="about-us-names">Dmitrii An</h2>
              <p className="about-us-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa inventore, sint iure, odit voluptas adipisci voluptates temporibus corporis animi autem perspiciatis repellendus accusantium eos ullam sunt dolorum consequatur ad consectetur.</p>
              <div className="info-us">
                <div className="info-us-contacts">
                  <a className="contact" href="https://github.com/andmitriy93" target="_blank"><i className='fa fa-github'></i></a>
                  <a className="contact" href="https://www.linkedin.com/in/dmitriy-an/" target="_blank"><i className='fa fa-linkedin'></i></a>
                  <a className="contact" href="https://angel.co/u/dmitrii-an" target="_blank"><i className='fa fa-angellist'></i></a>
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
