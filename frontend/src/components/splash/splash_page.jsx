import React from 'react'

const SplashPage = () => {
    return (
        <div className="splash-page">
            
                <header className="login-header">
                    <div className="login-header-wrapper">
                        <div className="splash-signup-wrap">
                            <button className="splash-signup-button">signup</button>
                        </div>
                        <div className="splash-login-buttons-wrap">
                            <button className="splash-demo-login">demo login</button>
                            <button className="splash-login-button"></button>
                        </div>
                    </div>
                </header>
                <div className="splash-body">
                    <div className="splash-text-wrap">
                        <div className="splash-haulaway-text-logo"></div>

                    </div>
                </div>
        </div>
    )
}

export default SplashPage