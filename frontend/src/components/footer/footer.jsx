import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className="splash-footer">
      <div className="splash-footer-wrapper">
        {/* <div className="thank you-wrap"> */}
        <div className="thank-you">Thank you for your visit</div>
        {/* </div> */}
        <div className="splash-footer-info">
          <div className="engineerd-by">Engineered with love by:</div>

          <div className="info-us-Lena">
            <a className="contact" href="https://github.com/shinara03" target="_blank"><i class='fa fa-github'>Lena</i></a>
            <a className="contact" href="https://github.com/andmitriy93" target="_blank"><i class='fa fa-github'>Dmitrii</i></a>
            <a className="contact" href="" target="_blank"><i class='fa fa-angellist'>Lena</i></a>
            <a className="contact" href="https://github.com/kinda-dev" target="_blank"><i class='fa fa-github'>Fabio</i></a>
          </div>
          <div className="info-us-Josh">
            <a className="contact" href="https://github.com/jsadsad" target="_blank"><i class='fa fa-github'>Josh</i></a>
            <a className="contact" href="" target="_blank"><i class='fa fa-angellist'>Dmitrii</i></a>
            <a className="contact" href="" target="_blank"><i class='fa fa-angellist'>Josh</i></a>
            <a className="contact" href="" target="_blank"><i class='fa fa-angellist'>Fabio</i></a>
          </div>
          <div className="info-us-Fabio">
            <a className="contact" href="" target="_blank"><i class='fa fa-linkedin'>Lena</i></a>
            <a className="contact" href="" target="_blank"><i class='fa fa-linkedin'>Dmitrii</i></a>
            <a className="contact" href="" target="_blank"><i class='fa fa-linkedin'>Josh</i></a>
            <a className="contact" href="" target="_blank"><i class='fa fa-linkedin'>Fabio</i></a>
          </div>
          <div className="info-us-Dmitrii">
            <a className="contact" href="" target="_blank"><i class='fa fa-linkedin'>Lena</i></a>
            <a className="contact" href="" target="_blank"><i class='fa fa-linkedin'>Dmitrii</i></a>
            <a className="contact" href="" target="_blank"><i class='fa fa-linkedin'>Josh</i></a>
            <a className="contact" href="" target="_blank"><i class='fa fa-linkedin'>Fabio</i></a>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Footer;