import React from 'react'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import { Switch } from 'react-router-dom'
import Modal from '../components/modal/modal'
import SplashPage from './splash/splash_page'
import HomepageContainer from './homepage/homepage_container'
import SignupFormContainer from '../components/session/signup_form_container'
import LoginFormContainer from '../components/session/login_form_container'
import UserShowContainer from './usershow/user_show_container'
import JobFormContainer from '../components/job/job_form_container'
import JobIndexContainer from './job/job_index_container'
import JobShowContainer from '../components/job/job_show_container'
import JobEditContainer from '../components/job/job_edit_container'
import ReviewFormContainer from './review/review_form_container'
import ReviewShowContainer from './review/review_show_container'
import ReviewEditContainer from './review/edit_review_form_container'
import AboutUs from './aboutUs/about_us'
import FourOFour from './404page/404page'

const App = () => (
  <div>
    <Modal />
    <Switch>
      <AuthRoute exact path="/" component={SplashPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/homepage" component={HomepageContainer} />
      <ProtectedRoute exact path="/jobs/new" component={JobFormContainer} />
      <ProtectedRoute exact path="/jobs/:jobId" component={JobShowContainer} />
      <ProtectedRoute exact path="/jobs" component={JobIndexContainer} />
      <ProtectedRoute
        exact
        path="/jobs/:jobId/review"
        component={ReviewFormContainer}
      />
      <ProtectedRoute
        exact
        path="/users/:userId/reviews/:reviewId"
        component={ReviewShowContainer}
      />
      <ProtectedRoute
        exact
        path="/users/:userId/reviews/edit/:reviewId"
        component={ReviewEditContainer}
      />
      <ProtectedRoute
        exact
        path="/users/:userId"
        component={UserShowContainer}
      />
      <ProtectedRoute
        exact
        path="/jobs/edit/:jobId"
        component={JobEditContainer}
      />
      <ProtectedRoute exact path="/about" component={AboutUs} />
      <Route path="*" component={FourOFour} />
    </Switch>
  </div>
)

export default App
