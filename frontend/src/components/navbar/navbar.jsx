import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './navbar.css'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    
        this.logoutUser = this.logoutUser.bind(this);
        this.getNavbar = this.getNavbar.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    getNavbar() {
        if (this.props.loggedIn) {
            return (
                <header className="navbar">
                    <div className="navbar-wrapper">
                        {/* <Link to={'/signup'}>SIGNUP</Link> */}
                        <div className="navbar-left-wrap">
                            <div className="navbar-logo-wrap"><Link className="logo-link" to={'/'}>Haulaway</Link></div>
                        </div>

                        <div className="navbar-right-wrap">
                            <div className="navbar-menu-logo-wrap">
                                <i className="fas fa-bars"></i>
                            </div>

                            <div className="navbar-menu">
                                <Link className="navbar-user-link" to={'/user'}><div className="navbar-menu-user">{this.props.currentUser.firstName} <i className="fas fa-cog"></i></div></Link>
                                <div className="logout" onClick={this.logoutUser}>Log Out</div>
                            </div>
                        </div>

                    </div>
                </header>
            );
        } else {
          return (
              <header className="navbar">
                  <div className="navbar-wrapper">
                      {/* <Link to={'/signup'}>SIGNUP</Link> */}
                      <div className="navbar-left-wrap">
                          <div className="navbar-logo-wrap"><Link className="logo-link" to={'/'}>Haulaway</Link></div>
                      </div>
                      {/* <div className="navbar-right-wrap">
                          <div className="navbar-user-menu-wrap"><i class="fas fa-bars"></i></div>
                      </div> */}

                  </div>
              </header>
          );
        }

  }  



    render() {
        return (
            <>
                { this.getNavbar() }
            </>
        )
    }
}

export default Navbar;
