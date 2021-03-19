// first basic setup

import React from 'react'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import { Switch, Route } from 'react-router-dom'

import SplashPage from './splash/splash_page'
import SignupFormContainer from '../components/session/signup_form_container'
import LoginFormContainer from '../components/session/login_form_container'
import JobFormContainer from '../components/job/job_form_container'
import JobOfferFormContainer from '../components/job/job_offer_container'
import UserShowContainer from './usershow/user_show_container'
import HomepageContainer from './homepage/homepage_container'
import JobIndexContainer from './job/job_index_container'
import JobShowContainer from '../components/job/job_show_container'
import ReviewFormContainer from './review/review_form_container'
import Modal from '../components/modal/modal'
import JobEditContainer from '../components/job/job_edit_container'
import AboutUs from './aboutUs/about_us'
import ReviewShowContainer from './review/review_show_container'
import FourOFour from './404page/404page'

const App = () => (
  <div>
    <Modal />
    <Switch>
      <AuthRoute exact path="/" component={SplashPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path='/homepage' component={HomepageContainer} />
      <ProtectedRoute exact path="/jobs/new" component={JobFormContainer} />
      <ProtectedRoute exact path="/jobs/offer" component={JobOfferFormContainer} />
      <ProtectedRoute exact path="/jobs/:jobId" component={JobShowContainer} />
      <ProtectedRoute exact path='/users/:userId' component={UserShowContainer} />
      <ProtectedRoute exact path='/jobs' component={JobIndexContainer} />
      <ProtectedRoute exact path='/jobs/edit/:jobId' component={JobEditContainer} />
      <ProtectedRoute exact path='/jobs/:jobId/review' component={ReviewFormContainer} />
      <ProtectedRoute exact path='/users/:userId/reviews/:reviewId' component={ReviewShowContainer} />
      <ProtectedRoute exact path='/about' component={AboutUs} />
      <Route path="*" component={FourOFour} />
    </Switch>
  </div>
)

export default App
