import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './navbar.css'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            showMenu: false,
        }

        this.showMenu = this.showMenu.bind(this);
        this.logoutUser = this.logoutUser.bind(this);
        this.getNavbar = this.getNavbar.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    showMenu(e) {
        e.preventDefault();
        this.setState({
            showMenu: !this.state.showMenu,
        })
    }

    getNavbar() {
        console.log(this.state.showMenu)
        if (this.props.loggedIn) {
            return (
                <div className="navbar">
                    <div className="navbar-wrapper">
                        <div className="navbar-left-wrap">
                            <div className="navbar-logo-wrap"><Link className="logo-link" to={'/'}>HaulAway</Link></div>
                        </div>
                        <div className="navbar-right-wrap">
                            <Link className="navbar-about-us-link" to="/about">About Us</Link>
                            {/* <div className="navbar-menu-logo-wrap">
                                <i className="fas fa-bars"></i>
                            </div> */}

                            {/* {this.props.currentUser.firstName} <i className="fas fa-cog"></i> */}
                            <i onClick={this.showMenu} className="fas fa-bars"></i>

                            {
                                this.state.showMenu
                                    ? (
                                        <div className="navbar-menu">
                                            <Link className="navbar-link-user-profile" to={`/users/${this.props.currentUser.id}`}><div className="navbar-menu-user"><i className="fas fa-user"></i> Profile</div></Link>
                                            <Link className="navbar-link-jobs-index" to={"/jobs"}><div className="navbar-menu-jobs"><i className="fas fa-shuttle-van"></i> All Jobs</div></Link>
                                            <Link className="navbar-link-jobs-new" to="/jobs/new"><div className="navbar-menu-jobs-new" ><i class='fa fa-handshake-o'></i> Request a Job</div></Link>
                                            <div className="logout" onClick={this.logoutUser}><i className="fas fa-times-circle"></i> Log Out</div>
                                        </div>
                                    )
                                    : (
                                        null
                                    )
                            }
                        </div>

                    </div>
                </div>
            );
        } else {
          return (
              <div className="navbar">
                  <div className="navbar-wrapper">
                      <div className="navbar-left-wrap">
                          <div className="navbar-logo-wrap"><Link className="logo-link" to={'/'}>HaulAway</Link></div>
                      </div>
                  </div>
              </div>
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
