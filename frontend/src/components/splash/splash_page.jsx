import React from 'react'
import './splash.css'

const SplashPage = () => {
    return (
        <div className="splash-page">
            
                <header className="splash-header">
                    <div className="splash-header-wrapper">

                        <div className="splash-signup-wrap">
                            <button className="splash-signup-button">SIGNUP</button>
                        </div>
                        <div className="splash-login-buttons-wrap">
                            <div className="splash-demo-login-wrap"><button className="splash-demo-login">DEMO LOGIN</button></div>
                            <div className="splash-login-wrap"><button className="splash-login-button">LOGIN</button></div>
                        </div>

                    </div>
                </header>

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
        </div>
    )
}

export default SplashPage