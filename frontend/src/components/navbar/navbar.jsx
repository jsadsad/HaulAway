import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './navbar.css'

class Navbar extends React.Component {
    constructor(props) {
        super(props)
    
        // this.state = {
             
        // }
    }
    

    render() {
        return (
            <header className="navbar">
            <div className="navbar-wrapper">

                <div className="navbar-signup-wrap">
                    <button className="navbar-signup-button">SIGNUP</button>
                </div>
                <div className="navbar-login-buttons-wrap">
                    <div className="navbar-demo-login-wrap"><button className="navbar-demo-login">DEMO LOGIN</button></div>
                    <div className="navbar-login-wrap"><button className="navbar-login-button">LOGIN</button></div>
                </div>

            </div>
        </header>
        )
    }
}

export default Navbar;
