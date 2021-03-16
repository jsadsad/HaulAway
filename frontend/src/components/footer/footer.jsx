import React from 'react'

const Footer = () => {
  return (
    <div className="splash-footer">
      <div className="splash-footer-wrapper">
        {/* <div className="thank you-wrap"> */}
        <div className="thank-you">Thank you for your visit</div>
        {/* </div> */}
        <div className="splash-footer-info">
          <div className="engineerd-by">Engineered with love by:</div>
          <div className="info-us">
            <a className="contact" href="https://github.com/shinara03" target="_blank">Lena</a>
            <a className="contact" href="https://github.com/andmitriy93" target="_blank">Dmitrii</a>
            <a className="contact" href="https://github.com/jsadsad" target="_blank">Josh</a>
            <a className="contact" href="https://github.com/kinda-dev" target="_blank">Fabio</a>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Footer;