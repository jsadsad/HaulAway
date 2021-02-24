// first basic setup

import React from 'react'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import { Switch, Route } from 'react-router-dom'

import SplashPage from './splash/splash_page'
import SignupFormContainer from '../components/session/signup_form_container'
import LoginFormContainer from '../components/session/login_form_container'
import JobPostFormContainer from './posts/job_post_container';
import UserShowContainer from './usershow/user_show_container'
import HomepageContainer from './homepage/homepage_container'
import JobIndexContainer from './job/job_index_container'

const App = () => (
  <Switch>
    <AuthRoute exact path="/" component={SplashPage} />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <ProtectedRoute exact path='/homepage' component={HomepageContainer} />
    <ProtectedRoute exact path="/job/new" component={JobPostFormContainer} />
    <ProtectedRoute exact path='/jobs' component={JobIndexContainer} />
    <ProtectedRoute exact path='/users/:userId' component={UserShowContainer} />
  </Switch>
)

export default App
