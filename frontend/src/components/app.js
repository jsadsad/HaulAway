// first basic setup

import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';

import SplashPage from './splash/splash_page';

const App = () => (
    // <Switch>
        <Route path="/" component={SplashPage} />
    // </Switch>
);

export default App;