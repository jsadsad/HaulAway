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
                            <div className="navbar-logo-wrap"><Link className="logo-link" to={'/'}>HaulAway</Link></div>
                        </div>
                        <div className="navbar-right-wrap">
                            <div className="navbar-menu-logo-wrap">
                                <i className="fas fa-bars"></i>
                            </div>

                            {/* {this.props.currentUser.firstName} <i className="fas fa-cog"></i> */}
                            <div className="navbar-menu">
                                <Link className="navbar-link-user-profile" to={`/users/${this.props.currentUser.id}`}><div className="navbar-menu-user"><i class="fas fa-user"></i> Profile</div></Link>
                                <Link className="navbar-link-jobs-index" to={"/jobs"}><div className="navbar-menu-jobs"><i class="fas fa-shuttle-van"></i> Jobs</div></Link>
                                <div className="logout" onClick={this.logoutUser}><i class="fas fa-times-circle"></i> Log Out</div>
                            </div>
                        </div>

                    </div>
                </header>
            );
        } else {
          return (
              <header className="navbar">
                  <div className="navbar-wrapper">
                      <div className="navbar-left-wrap">
                          <div className="navbar-logo-wrap"><Link className="logo-link" to={'/'}>HaulAway</Link></div>
                      </div>
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
