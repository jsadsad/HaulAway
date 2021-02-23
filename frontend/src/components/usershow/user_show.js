import React from 'react';
import NavBar from '../navbar/navbar';
import usershow from './usershow.css';

class UserShow extends React.Component {
  render() {
    return(
       <div className='user-show-page'>
        <NavBar/>
        <div className='show-page-wrapper'>
          <div className='user-info-wrapper'>
            <div className='user-image'>
              <h1>User image</h1>
            </div>
            <p>ratings</p>
            <p>email</p>
            <div className='user-name'>
              <p className='user-firstname'>first name</p>
              <p className='user-lastname'>last name</p>
            </div>
          </div>
          <div className='job-wrapper'>
            <h2 className='job-info-header'>JOBS </h2>
            <div className='job-info-wrapper'>
              <div className='job-request'>
                <h2>Currently You requested 0 jobs</h2>
              </div>
              <div className='job-accept'>
                <h2>Currently You accepted 0 jobs</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserShow