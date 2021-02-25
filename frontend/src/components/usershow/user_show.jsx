import React from 'react';
import NavBar from '../navbar/navbar_container';
import usershow from './usershow.css';

class UserShow extends React.Component {

  componentDidMount() {
    this.props.fetchUser(this.props.userId)
  }

  render() {

    const user = this.props.users[this.props.userId]
    if (!user) {return null}

    return(
       <div className='user-show-page'>
        
        <NavBar/>
        
        <div className='show-page-wrapper'>
          
          <div className='user-info-wrapper'>
            <div className='user-image-wrap'>
              <img className="user-image" src={user.profilePic} alt={user.firstName}/>
            </div>
            <p>ratings</p>
            <p>{user.email}</p>
            <div className='user-name'>
              <p className='user-firstname'>{user.firstName}</p>
              <p className='user-lastname'>{user.lastName}</p>
            </div>
          </div>
          
          <div className='job-wrapper'>
            <h2 className='job-info-header'>JOBS </h2>
            <div className='job-info-wrapper'>
              <div className='job-request'>
                <h2>Hauling Requests</h2>
              </div>
              <div className='job-accept'>
                <h2>Hauling Offers</h2>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    )
  }
}

export default UserShow