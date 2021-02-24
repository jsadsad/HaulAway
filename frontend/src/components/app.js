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

const App = () => (
  <Switch>
    <Route exact path="/" component={SplashPage} />
    <Route exact path='/homepage' component={HomepageContainer} />
    <Route exact path="/login" component={LoginFormContainer} />
    <Route exact path="/signup" component={SignupFormContainer} />
    <Route exact path="/job/new" component={JobPostFormContainer} />
    <Route exact path='/users/:userId' component={UserShowContainer} />
  </Switch>
)

export default App
