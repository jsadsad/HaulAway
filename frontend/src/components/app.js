// first basic setup

import React from 'react'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import { Switch, Route } from 'react-router-dom'

import SplashPage from './splash/splash_page'
import SignupFormContainer from '../components/session/signup_form_container'
import LoginFormContainer from '../components/session/login_form_container'
import UserShowContainer from './usershow/user_show_container'

const App = () => (
  <Switch>
    <AuthRoute exact path="/" component={SplashPage} />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <ProtectedRoute exact path='/user' component={UserShowContainer} />
  </Switch>
)
//Route path='/user' should be changed to path='/user/:userId' and 
//component should be {usershow}

export default App
