import React from 'react';
import './splash.css';
import { Link } from 'react-router-dom';


const SplashPage = () => {
    return (
        <div className="splash-page">
            
                {/* <Navbar /> */}

                <div className="splash-body">
                    <img className="splash-background" src="https://haul-seeds.s3-us-west-1.amazonaws.com/ha-1.jpg" alt="background"/>
                    {/* <div className="splah-body-inner-wrap"> */}
                    <div className="splash-text-wrap">
                        <h1 className="splash-haulaway-text-logo">HaulAway</h1>
                        <h2 className="splash-slogan">Hauling Reinvented</h2>
                        <h4 className="splash-little-motivation">[ Technology for Humans, by Humans ]</h4>
                        <div className="splash-session-buttons">
                            <div className="splash-signup-wrap"><button className="splash-signup-button"><Link className="splash-signup-link" to={'/signup'}>SIGNUP</Link></button></div>
                            <div className="splash-login-wrap"><button className="splash-login-button"><Link className="splash-login-link" to={'/login'}>LOGIN</Link></button></div>
                        </div>
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