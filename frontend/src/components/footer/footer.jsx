import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-inner-wrap">
        <div className="thank-you">Thank you for your visit</div>
        <div className="footer-about-us">
          <div className="info-us">
            Lena
            <div className="info-us-contacts">
              <a className="contact" href="https://github.com/shinara03" target="_blank"><i className='fa fa-github'></i></a>
              <a className="contact" href="https://www.linkedin.com/in/hyeyoung-shin-442228209/" target="_blank"><i className='fa fa-linkedin'></i></a>
              <a className="contact" href="https://angel.co/u/hyeyoung-lena-shin" target="_blank"><i className='fa fa-angellist'></i></a>
            </div>
          </div>
          <div className="info-us">
            Josh
            <div className="info-us-contacts">
              <a className="contact" href="https://github.com/jsadsad" target="_blank"><i className='fa fa-github'></i></a>
              <a className="contact" href="https://www.linkedin.com/in/joshsad2/" target="_blank"><i className='fa fa-linkedin'></i></a>
              <a className="contact" href="https://angel.co/u/jsadsad" target="_blank"><i className='fa fa-angellist'></i></a>
            </div>
          </div>
          <div className="info-us">
            Fabio
            <div className="info-us-contacts">
              <a className="contact" href="https://github.com/kinda-dev" target="_blank"><i className='fa fa-github'></i></a>
              <a className="contact" href="https://www.linkedin.com/in/fabio-raffaele-bortone/" target="_blank"><i className='fa fa-linkedin'></i></a>
              <a className="contact" href="https://angel.co/u/fabio-raffaele-bortone" target="_blank"><i className='fa fa-angellist'></i></a>
            </div>
          </div>
          <div className="info-us">
            Dmitrii
            <div className="info-us-contacts">
              <a className="contact" href="https://github.com/andmitriy93" target="_blank"><i className='fa fa-github'></i></a>
              <a className="contact" href="https://www.linkedin.com/in/dmitriy-an/" target="_blank"><i className='fa fa-linkedin'></i></a>
              <a className="contact" href="https://angel.co/u/dmitrii-an" target="_blank"><i className='fa fa-angellist'></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Footer;