import React from 'react';
import './splash.css';
import Navbar from '../navbar/navbar';

const SplashPage = () => {
    return (
        <div className="splash-page">
            
                <Navbar />

                <div className="splash-body">
                    <img className="splash-background" src="https://haul-seeds.s3-us-west-1.amazonaws.com/ha-1.jpg" alt="background"/>
                    {/* <div className="splah-body-inner-wrap"> */}
                    <div className="splash-text-wrap">
                        <h1 className="splash-haulaway-text-logo">HaulAway</h1>
                        <h2 className="splash-slogan">Hauling Reinvented</h2>
                        <h4 className="splash-little-motivation">[ Technology for Humans, by Humans ]</h4>
                    </div>
                    {/* </div> */}
                    <div className="center-pixel"></div>
                </div>

                <div className="splash-footer">
                    <div className="splash-footer-wrapper">
                        {/* <div className="thank you-wrap"> */}
                        <div className="thank-you">Thank you for your visit</div>
                        {/* </div> */}
                    <div className="splash-footer-info">
                        <div className="engineerd-by">Engineerd with love by:</div>
                            <div className="info-us">
                                <a className="contact" href="https://github.com/shinara03" target="_blank">Lena</a>
                                <a className="contact" href="https://github.com/andmitriy93" target="_blank">Dmitrii</a>
                                <a className="contact" href="https://github.com/jsadsad" target="_blank">Josh</a>
                                <a className="contact" href="https://github.com/kinda-dev" target="_blank">Fabio</a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default SplashPage