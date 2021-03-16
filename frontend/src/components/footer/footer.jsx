import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className="splash-footer">
      <div className="splash-footer-wrapper">
        <div className="splash-footer-info">
          <div className="thank-you">Thank you for your visit</div>
          {/* <div className="engineerd-by">Engineered with love by:</div> */}
          <div className="splash-footer-about-us">
            <div className="info-us">
              Lena
              <div className="info-us-contacts">
                <a className="contact" href="https://github.com/shinara03" target="_blank"><i class='fa fa-github'></i></a>
                <a className="contact" href="" target="_blank"><i class='fa fa-linkedin'></i></a>
                <a className="contact" href="" target="_blank"><i class='fa fa-angellist'></i></a>
              </div>
            </div>
            <div className="info-us">
              Josh
              <div className="info-us-contacts">
                <a className="contact" href="https://github.com/jsadsad" target="_blank"><i class='fa fa-github'></i></a>
                <a className="contact" href="" target="_blank"><i class='fa fa-linkedin'></i></a>
                <a className="contact" href="" target="_blank"><i class='fa fa-angellist'></i></a>
              </div>
            </div>
            <div className="info-us">
              Fabio
              <div className="info-us-contacts">
                <a className="contact" href="https://github.com/kinda-dev" target="_blank"><i class='fa fa-github'></i></a>
                <a className="contact" href="" target="_blank"><i class='fa fa-linkedin'></i></a>
                <a className="contact" href="" target="_blank"><i class='fa fa-angellist'></i></a>
              </div>
            </div>
            <div className="info-us">
              Dmitrii
              <div className="info-us-contacts">
                <a className="contact" href="https://github.com/andmitriy93" target="_blank"><i class='fa fa-github'></i></a>
                <a className="contact" href="" target="_blank"><i class='fa fa-linkedin'></i></a>
                <a className="contact" href="" target="_blank"><i class='fa fa-angellist'></i></a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}


export default Footer;