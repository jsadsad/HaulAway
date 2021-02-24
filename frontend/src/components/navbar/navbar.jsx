import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './navbar.css'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    
        // this.state = {
             
        // }
    }
    

    render() {
        return (
            <header className="navbar">
                <div className="navbar-wrapper">
                    {/* <Link to={'/signup'}>SIGNUP</Link> */}
                    <div className="navbar-left-wrap">
                        <div className="navbar-logo-wrap"><Link className="logo-link" to={'/'}>Haulaway</Link></div>
                    </div>
                    <div className="navbar-right-wrap">
                        <div className="navbar-user-menu-wrap"><button className="navbar-login-button">user</button></div>
                    </div>

                </div>
            </header>
        )
    }
}

export default Navbar;
